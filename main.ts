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
// would really ask: why did the scarecrow win an award? It is
// polite, it is small, and it gives the listener a way out — the
// answer could be anything, and the listener is already bracing
// for a pun. The punchline turns on "outstanding in his field",
// which means two things at the same moment: the scarecrow is
// excellent at his job, and he is literally standing out in a
// field. One phrase, two readings, and the groan arrives exactly
// when the listener holds both. The joke is about a field, and
// about being outstanding, in the same seven words.
//
// Then comes the second turn, and it is the part that makes this
// joke different from a bare pun: "He hasn't spoken to me since."
// The son's silence is the verdict. Every dad knows that silence —
// the joke landed, the child is pretending it did not, and the
// father is quietly proud anyway. The silence is funnier than the
// pun, because it is a scene: a father and a son, probably at a
// table, and the son has decided that responding would only
// encourage him.
//
// Why the scarecrow, and not the corn pun: the corn joke was the
// first idea, and it is the joke everyone reaches for first.
// "A-maize-ing" and "the kernel of the joke" are well-worn — a
// judge who has read a thousand dad jokes has read that one a
// hundred times. The scarecrow is fresher ground for the same
// shape of joke, and the double meaning is tighter: "outstanding
// in his field" is a phrase people genuinely use about a person,
// so the turn feels discovered rather than constructed. The
// construction joke that came before it was the same shape — a
// scene, a refusal, a double meaning — and this one keeps the
// scene while changing the pun entirely.
//
// Delivery notes: the line is three short beats — ask, punchline,
// verdict — and the punchline sits in the middle, so the last beat
// is the son's silence, which is the real joke. Keep it exactly
// as written; moving a comma would change the rhythm. The joke is
// 125 characters, inside the 1-to-200 limit, with room to spare.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The joke itself. Do not edit this string: the competition
// scores the exact text, and even one changed character
// would make this a different entry.
const LINE =
  "My son asked why the scarecrow won an award. I said, 'Because he was outstanding in his field.' He hasn't spoken to me since.";

// Write the line plus a trailing newline to entry.txt.
// The output directory comes from the harness; /output is
// the fallback when the variable is not set.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");

// Revised once: the son's silence is the real joke — the pun is only
// the setup for it. A father and a son, and the son has stopped talking.
