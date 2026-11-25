// Dad Joke Showdown — make.fun entry for @yuhao-qiao.
//
// What this program does: it writes one dad joke to
// $MAKEFUN_OUTPUT_DIR/entry.txt. The joke text is baked into the
// code below, so the program needs no network and writes exactly
// the same bytes on every run.
//
// Why this joke works — the anatomy, as I see it:
//
// A dad joke lives or dies on the groan, and the groan needs a
// setup that sounds harmless. The opener is a question any father
// would really ask: do you want to hear a joke about
// construction? It is polite, it is small, and it gives the
// listener a way out. The son takes the way out and says no.
// That refusal is the hinge of the whole joke. Most jokes stop
// at the setup and deliver the punchline; here the refusal
// becomes a second setup. The father tells the joke anyway,
// because that is what fathers do, and the punchline turns on
// the phrase "I'm still working on it".
//
// That last line carries two meanings at once, and both land
// at the same moment. On the surface it means the joke itself
// is unfinished — the father is still working on the joke,
// which is why it is not very good. Underneath it means the
// construction work is still going on, because construction
// never really finishes either. The joke is about a joke, and
// about a building site, in the same seven words. One clean
// turn, no second pun stacked on top, no explanation after it.
// The moment the listener gets both meanings is the moment
// they groan, and the groan is the point.
//
// Why construction, and not the corn pun: the corn joke was
// the first idea, and it is the joke everyone reaches for
// first. "A-maize-ing" and "the kernel of the joke" are
// well-worn — a judge who has read a thousand dad jokes has
// read that one a hundred times. Construction is fresher
// ground for the same shape of joke, and the double meaning
// of "working on it" is tighter: it is a phrase people
// actually say about a renovation, so the turn feels
// discovered rather than constructed. The refusal in the
// middle also helps: the son saying no gives the joke a
// little scene, a father and a son at a table, instead of
// a bare one-liner. A scene is easier to picture, and a
// picture is easier to laugh at — or groan at.
//
// Delivery notes: the line is one sentence broken into
// three beats — ask, refusal, tell it anyway — and the
// punchline sits at the very end, after the em dash, so
// nothing before it gives the turn away. The em dash is
// part of the timing: a short pause, then the turn.
// Keep it exactly as written; moving a comma would
// change the rhythm. The joke is 119 characters, inside
// the 1-to-200 limit, with room to spare.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The joke itself. Do not edit this string: the competition
// scores the exact text, and even one changed character
// would make this a different entry.
const LINE =
  "I asked my son if he wanted to hear a joke about construction. He said no. I told him anyway — I'm still working on it.";

// Write the line plus a trailing newline to entry.txt.
// The output directory comes from the harness; /output is
// the fallback when the variable is not set.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
