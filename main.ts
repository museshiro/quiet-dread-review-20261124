import { mkdirSync, writeFileSync } from "node:fs";

// Two Days of Quiet Dread — one-line code review comment approving a PR
// with quiet existential dread. Line: 96 characters (gate: 1-140).
const LINE =
  "Approved. 0032_user_roles and its 14 tests pass; they'll still pass when my badge stops working.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE);
