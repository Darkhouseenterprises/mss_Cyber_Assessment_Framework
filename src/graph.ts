/**
 * Instance graphs for CAF v3.2, v4.0, and the outcome-level mapping
 * between them. Indicators stay off the canvas — 500+ IGPs turn the
 * picture to soup; the joints are objective → principle → outcome.
 */

import type { Framework, Mapping } from "./schema.js";

export type GraphNode = {
  id: string;
  kind: string;
  label: string;
  title?: string;
};

export type GraphEdge = {
  source: string;
  target: string;
  kind: string;
};

export type Graph = {
  title: string;
  nodes: GraphNode[];
  edges: GraphEdge[];
};

function add(nodes: Map<string, GraphNode>, n: GraphNode): void {
  if (!nodes.has(n.id)) nodes.set(n.id, n);
}

export function frameworkGraph(framework: Framework): Graph {
  const nodes = new Map<string, GraphNode>();
  const edges: GraphEdge[] = [];
  const root = `caf-${framework.version}`;
  add(nodes, {
    id: root,
    kind: "framework",
    label: `CAF ${framework.version}`,
    title: framework.title,
  });
  for (const objective of framework.objectives) {
    add(nodes, {
      id: objective.id,
      kind: "objective",
      label: `Objective ${objective.id}`,
      title: objective.title,
    });
    edges.push({ source: root, target: objective.id, kind: "contains" });
    for (const principle of objective.principles) {
      add(nodes, {
        id: principle.id,
        kind: "principle",
        label: principle.id,
        title: `${principle.title} — ${principle.description}`,
      });
      edges.push({ source: objective.id, target: principle.id, kind: "contains" });
      for (const outcome of principle.outcomes) {
        add(nodes, {
          id: outcome.id,
          kind: "outcome",
          label: outcome.id,
          title: `${outcome.title} — ${outcome.description}`,
        });
        edges.push({ source: principle.id, target: outcome.id, kind: "contains" });
      }
    }
  }
  return {
    title: `CAF ${framework.version}`,
    nodes: [...nodes.values()],
    edges,
  };
}

const STRUCTURAL = /^[A-D](?:[1-6](?:\.[a-z])?)?$/;

export function mappingGraph(
  caf32: Framework,
  caf40: Framework,
  mapping: Mapping[]
): Graph {
  const nodes = new Map<string, GraphNode>();
  const edges: GraphEdge[] = [];
  const index = (fw: Framework, prefix: string) => {
    add(nodes, {
      id: prefix,
      kind: "framework",
      label: `CAF ${fw.version}`,
      title: fw.title,
    });
    for (const objective of fw.objectives) {
      add(nodes, {
        id: `${prefix}:${objective.id}`,
        kind: "objective",
        label: `${fw.version} ${objective.id}`,
        title: objective.title,
      });
      edges.push({
        source: prefix,
        target: `${prefix}:${objective.id}`,
        kind: "contains",
      });
      for (const principle of objective.principles) {
        add(nodes, {
          id: `${prefix}:${principle.id}`,
          kind: "principle",
          label: `${fw.version} ${principle.id}`,
          title: principle.title,
        });
        edges.push({
          source: `${prefix}:${objective.id}`,
          target: `${prefix}:${principle.id}`,
          kind: "contains",
        });
        for (const outcome of principle.outcomes) {
          add(nodes, {
            id: `${prefix}:${outcome.id}`,
            kind: "outcome",
            label: `${fw.version} ${outcome.id}`,
            title: outcome.title,
          });
          edges.push({
            source: `${prefix}:${principle.id}`,
            target: `${prefix}:${outcome.id}`,
            kind: "contains",
          });
        }
      }
    }
  };
  index(caf32, "v32");
  index(caf40, "v40");
  for (const row of mapping) {
    if (!STRUCTURAL.test(row.fromId)) continue;
    const from = `v32:${row.fromId}`;
    const to = row.toId ? `v40:${row.toId}` : null;
    if (to && nodes.has(from) && nodes.has(to)) {
      edges.push({ source: from, target: to, kind: row.change });
    } else if (!to && nodes.has(from)) {
      add(nodes, {
        id: `removed:${row.fromId}`,
        kind: "removed",
        label: `removed ${row.fromId}`,
        title: row.note,
      });
      edges.push({ source: from, target: `removed:${row.fromId}`, kind: "removed" });
    }
  }
  return {
    title: "CAF v3.2 → v4.0",
    nodes: [...nodes.values()],
    edges,
  };
}
