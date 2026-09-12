/**
 * Runtime validator — parses both CAF instances and the v3.2→v4.0 mapping
 * through Zod and prints a summary. Exits non-zero on any violation.
 *
 *     npm run validate
 */

import { caf32 } from "./data/caf32.js";
import { caf40 } from "./data/caf40.js";
import { v32ToV40 } from "./data/mapping.js";
import {
  FrameworkSchema,
  MappingArraySchema,
  countTree,
  findOutcome,
} from "./schema.js";

const V40_OUTCOMES = [
  "A1.a",
  "A1.b",
  "A1.c",
  "A2.a",
  "A2.b",
  "A2.c",
  "A3.a",
  "A4.a",
  "A4.b",
  "B1.a",
  "B1.b",
  "B2.a",
  "B2.b",
  "B2.c",
  "B2.d",
  "B3.a",
  "B3.b",
  "B3.c",
  "B3.d",
  "B3.e",
  "B4.a",
  "B4.b",
  "B4.c",
  "B4.d",
  "B5.a",
  "B5.b",
  "B5.c",
  "B6.a",
  "B6.b",
  "C1.a",
  "C1.b",
  "C1.c",
  "C1.d",
  "C1.e",
  "C1.f",
  "C2.a",
  "D1.a",
  "D1.b",
  "D1.c",
  "D2.a",
  "D2.b",
] as const;

function fail(label: string, issues: { path: (string | number)[]; message: string }[]): never {
  console.error(`${label} schema validation FAILED`);
  for (const issue of issues) {
    console.error(`  - ${issue.path.join(".")}: ${issue.message}`);
  }
  process.exit(1);
}

const r32 = FrameworkSchema.safeParse(caf32);
if (!r32.success) fail("CAF v3.2", r32.error.issues);

const r40 = FrameworkSchema.safeParse(caf40);
if (!r40.success) fail("CAF v4.0", r40.error.issues);

const rm = MappingArraySchema.safeParse(v32ToV40);
if (!rm.success) fail("v32ToV40 mapping", rm.error.issues);

if (caf32.version !== "3.2") {
  console.error(`CAF v3.2 version field is ${caf32.version}, expected 3.2`);
  process.exit(1);
}
if (caf40.version !== "4.0") {
  console.error(`CAF v4.0 version field is ${caf40.version}, expected 4.0`);
  process.exit(1);
}

const c2 = findOutcome(caf32, "C2.a");
const c2p = caf32.objectives
  .flatMap((o) => o.principles)
  .find((p) => p.id === "C2");
if (!c2p || !/proactive security event discovery/i.test(c2p.title)) {
  console.error(
    `CAF v3.2 principle C2 must remain "Proactive Security Event Discovery" (got ${c2p?.title ?? "missing"})`
  );
  process.exit(1);
}
if (!c2 || !/system abnormalities/i.test(c2.title)) {
  console.error(
    `CAF v3.2 C2.a must remain "System Abnormalities for Attack Detection" (got ${c2?.title ?? "missing"})`
  );
  process.exit(1);
}

const missing: string[] = [];
for (const id of V40_OUTCOMES) {
  const o = findOutcome(caf40, id);
  if (!o) missing.push(id);
  else if (o.indicators.length === 0) missing.push(`${id} (no indicators)`);
}
if (missing.length) {
  console.error("CAF v4.0 missing or empty outcomes:");
  for (const id of missing) console.error(`  - ${id}`);
  process.exit(1);
}

const t32 = countTree(caf32);
const t40 = countTree(caf40);

if (t40.outcomes !== 41) {
  console.error(`CAF v4.0 must have 41 contributing outcomes, got ${t40.outcomes}`);
  process.exit(1);
}

const byChange: Record<string, number> = {};
for (const row of v32ToV40) {
  byChange[row.change] = (byChange[row.change] ?? 0) + 1;
}

console.log("CAF validated \u2713");
console.log("");
console.log("v3.2");
console.log(`  version:     ${caf32.version}`);
console.log(`  retrieved:   ${caf32.retrievedAt}`);
console.log(`  published:   ${caf32.publishedAt}`);
console.log(`  objectives:  ${t32.objectives}`);
console.log(`  principles:  ${t32.principles}`);
console.log(`  outcomes:    ${t32.outcomes}`);
console.log(`  indicators:  ${t32.indicators}`);
console.log(`  C2:          ${c2p.title}`);
console.log(`  C2.a:        ${c2.title}`);
console.log("");
console.log("v4.0");
console.log(`  version:     ${caf40.version}`);
console.log(`  retrieved:   ${caf40.retrievedAt}`);
console.log(`  published:   ${caf40.publishedAt}`);
console.log(`  objectives:  ${t40.objectives}`);
console.log(`  principles:  ${t40.principles}`);
console.log(`  outcomes:    ${t40.outcomes}`);
console.log(`  indicators:  ${t40.indicators}`);
console.log(`  C2:          ${caf40.objectives.flatMap((o) => o.principles).find((p) => p.id === "C2")?.title}`);
console.log(`  C2.a:        ${findOutcome(caf40, "C2.a")?.title}`);
console.log("");
console.log("mapping v3.2 → v4.0");
console.log(`  rows:        ${v32ToV40.length}`);
for (const k of ["unchanged", "rewritten", "split", "merged", "removed", "new"]) {
  if (byChange[k]) console.log(`  ${k.padEnd(12)}${byChange[k]}`);
}
