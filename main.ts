// Worst AI Advice: The 48-Hour Tight Line Open
// Writes one line of the worst advice an AI could give (140 chars or fewer)
// to <output dir>/entry.txt. Node 22, standard library only, no network.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
"For a stronger password, reuse the same one for every account — including your bank — so you'll never forget it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
