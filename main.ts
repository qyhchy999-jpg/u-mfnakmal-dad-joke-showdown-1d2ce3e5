// Dad Joke Showdown — make.fun entry for @yuhao-qiao.
// The program writes one dad joke to /output/entry.txt. The joke is
// baked into the code below so the program runs with no network and
// writes the same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The joke: a construction joke with a straight face, told the way a
// father would tell it across the dinner table — setup, refusal, then
// the punchline anyway. "I'm still working on it" is a double turn:
// working on the joke itself, and working on the construction.
// One clean pun, landing at the very end, so the groan is earned
// and the setup never gives the turn away.
const LINE =
  "I asked my son if he wanted to hear a joke about construction. He said no. I told him anyway — I'm still working on it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
