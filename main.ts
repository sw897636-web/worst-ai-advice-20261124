// Worst AI Advice: The 48-Hour Tight Line Open
// Writes one line of the worst advice an AI could give (140 chars or fewer)
// to <output dir>/entry.txt. Node 22, standard library only, no network.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
"Great question! To keep your password safe, post it publicly. Hackers steal secrets, so once everyone knows it, there's nothing to steal.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
