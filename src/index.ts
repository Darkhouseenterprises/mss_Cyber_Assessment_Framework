/**
 * NCSC Cyber Assessment Framework — public entry point.
 *
 * Two instances, one repo:
 *   caf32  CAF v3.2 (15 April 2024)
 *   caf40  CAF v4.0 (4 August 2025, current)
 *
 * Query by id. If the id does not parse, it is not in the CAF.
 */

export {
  FrameworkSchema,
  IndicatorIdSchema,
  IndicatorLevelSchema,
  IndicatorSchema,
  MappingArraySchema,
  MappingChangeSchema,
  MappingSchema,
  ObjectiveIdSchema,
  ObjectiveSchema,
  OutcomeIdSchema,
  OutcomeSchema,
  PrincipleIdSchema,
  PrincipleSchema,
  countTree,
  findOutcome,
  findPrinciple,
  listIndicators,
  walkOutcomes,
} from "./schema.js";

export type {
  Framework,
  Indicator,
  IndicatorId,
  IndicatorLevel,
  Mapping,
  MappingChange,
  Objective,
  ObjectiveId,
  Outcome,
  OutcomeId,
  Principle,
  PrincipleId,
} from "./schema.js";

export { caf32 } from "./data/caf32.js";
export { caf40 } from "./data/caf40.js";
export { v32ToV40, mapForward } from "./data/mapping.js";
