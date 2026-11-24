import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Approved. Clean diff, good tests. It survived three rewrites and a reorg; it will outlive me, and frankly, it deserves to.";

if (LINE.length > 140) {
  throw new Error(`line is ${LINE.length} characters, over the 140 limit`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("line must not contain a newline");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`wrote ${LINE.length}-character entry to ${join(outDir, "entry.txt")}`);
