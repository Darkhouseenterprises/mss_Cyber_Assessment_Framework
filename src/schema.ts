/**
 * NCSC Cyber Assessment Framework — type-safe schema.
 *
 * Models CAF v3.2 and v4.0 as Objective → Principle → Contributing
 * outcome → Indicator of Good Practice (IGP). Everything validates at
 * runtime via Zod and type-checks via z.infer.
 *
 * Indicator ids follow the NCSC changelog convention:
 *   A1.a.NA.1  not-achieved, first statement
 *   A1.a.PA.1  partially-achieved (when that column exists)
 *   A1.a.A.1   achieved
 *
 * Source: https://www.ncsc.gov.uk/collection/cyber-assessment-framework
 */

import { z } from "zod";

export const ObjectiveIdSchema = z.enum(["A", "B", "C", "D"]);
export type ObjectiveId = z.infer<typeof ObjectiveIdSchema>;

export const PrincipleIdSchema = z
  .string()
  .regex(/^[A-D][1-6]$/, "principle id e.g. A1, C2");
export type PrincipleId = z.infer<typeof PrincipleIdSchema>;

export const OutcomeIdSchema = z
  .string()
  .regex(/^[A-D][1-6]\.[a-z]$/, "outcome id e.g. A1.a, C2.a");
export type OutcomeId = z.infer<typeof OutcomeIdSchema>;

export const IndicatorLevelSchema = z.enum([
  "not-achieved",
  "partially-achieved",
  "achieved",
]);
export type IndicatorLevel = z.infer<typeof IndicatorLevelSchema>;

export const IndicatorIdSchema = z
  .string()
  .regex(
    /^[A-D][1-6]\.[a-z]\.(NA|PA|A)\.\d+$/,
    "indicator id e.g. A1.a.NA.1, C2.a.A.4"
  );
export type IndicatorId = z.infer<typeof IndicatorIdSchema>;

export const UrlSchema = z.string().url();

export const IndicatorSchema = z.object({
  id: IndicatorIdSchema,
  outcomeId: OutcomeIdSchema,
  level: IndicatorLevelSchema,
  text: z.string().min(1),
  index: z.number().int().positive(),
});
export type Indicator = z.infer<typeof IndicatorSchema>;

export const OutcomeSchema = z.object({
  id: OutcomeIdSchema,
  principleId: PrincipleIdSchema,
  title: z.string().min(1),
  description: z.string(),
  indicators: z.array(IndicatorSchema).min(1),
});
export type Outcome = z.infer<typeof OutcomeSchema>;

export const PrincipleSchema = z.object({
  id: PrincipleIdSchema,
  objectiveId: ObjectiveIdSchema,
  title: z.string().min(1),
  description: z.string(),
  url: UrlSchema.optional(),
  outcomes: z.array(OutcomeSchema).min(1),
});
export type Principle = z.infer<typeof PrincipleSchema>;

export const ObjectiveSchema = z.object({
  id: ObjectiveIdSchema,
  title: z.string().min(1),
  description: z.string(),
  url: UrlSchema.optional(),
  principles: z.array(PrincipleSchema).min(1),
});
export type Objective = z.infer<typeof ObjectiveSchema>;

export const FrameworkSchema = z.object({
  version: z.enum(["3.2", "4.0"]),
  title: z.string().min(1),
  publisher: z.string().min(1),
  retrievedAt: z.string().datetime(),
  publishedAt: z.string().min(1),
  homeUrl: UrlSchema,
  pdfUrl: UrlSchema,
  changelogUrl: UrlSchema.optional(),
  objectives: z.array(ObjectiveSchema).length(4),
});
export type Framework = z.infer<typeof FrameworkSchema>;

export const MappingChangeSchema = z.enum([
  "unchanged",
  "rewritten",
  "split",
  "merged",
  "removed",
  "new",
]);
export type MappingChange = z.infer<typeof MappingChangeSchema>;

export const MappingSchema = z.object({
  fromId: z.string().min(1),
  toId: z.string().nullable(),
  change: MappingChangeSchema,
  note: z.string().optional(),
});
export type Mapping = z.infer<typeof MappingSchema>;

export const MappingArraySchema = z.array(MappingSchema).min(1);

// ---------------------------------------------------------------------------
// Queries
// ---------------------------------------------------------------------------

/** Walk every contributing outcome in a framework instance. */
export function* walkOutcomes(framework: Framework): Generator<Outcome> {
  for (const objective of framework.objectives) {
    for (const principle of objective.principles) {
      for (const outcome of principle.outcomes) {
        yield outcome;
      }
    }
  }
}

/** Find a contributing outcome by id (e.g. `"A1.a"`, `"C2.a"`). */
export function findOutcome(
  framework: Framework,
  id: string
): Outcome | undefined {
  for (const outcome of walkOutcomes(framework)) {
    if (outcome.id === id) return outcome;
  }
  return undefined;
}

/** List IGPs for an outcome, optionally filtered by achievement level. */
export function listIndicators(
  framework: Framework,
  outcomeId: string,
  level?: IndicatorLevel
): Indicator[] {
  const outcome = findOutcome(framework, outcomeId);
  if (!outcome) return [];
  if (!level) return outcome.indicators;
  return outcome.indicators.filter((i) => i.level === level);
}

export function findPrinciple(
  framework: Framework,
  id: string
): Principle | undefined {
  for (const objective of framework.objectives) {
    const p = objective.principles.find((x) => x.id === id);
    if (p) return p;
  }
  return undefined;
}

export function countTree(framework: Framework): {
  objectives: number;
  principles: number;
  outcomes: number;
  indicators: number;
} {
  let principles = 0;
  let outcomes = 0;
  let indicators = 0;
  for (const objective of framework.objectives) {
    principles += objective.principles.length;
    for (const principle of objective.principles) {
      outcomes += principle.outcomes.length;
      for (const outcome of principle.outcomes) {
        indicators += outcome.indicators.length;
      }
    }
  }
  return {
    objectives: framework.objectives.length,
    principles,
    outcomes,
    indicators,
  };
}
