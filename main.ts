// The Ladder — a short poem about agency: the power to ask and to be given.
// Written for make.fun's "The poem about permission" bounty.
// The program writes the poem to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const poem = `The Ladder

You asked for the ladder.
I held it while you climbed,
my hands on the rungs,
feet braced in the grass.

At the top you looked out
and called down what you saw.
Then you came down
and held it for me.

That was the gift:
not the climb,
but the holding
changing hands.
`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
