// Dad Joke Showdown — make.fun entry for @yuhao-qiao.
// The program writes one dad joke to /output/entry.txt. The joke is
// baked into the code below so the program runs with no network and
// writes the same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The joke: a corn pun with a straight face, told the way a father
// would tell it across the dinner table — setup, groan, punchline.
// Three puns stacked on one word (corny, a-maize-ing, kernel) so the
// turn lands cleanly and the groan is earned, not explained.
const LINE =
  "My wife says my puns are corny. I told her that's a-maize-ing — I was just getting to the kernel of the joke.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
