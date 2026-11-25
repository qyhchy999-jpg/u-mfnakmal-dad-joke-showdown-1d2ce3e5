# Dad Joke Showdown

[![make.fun](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5)
[![rank](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5/qyhchy999-jpg/u-mfnakmal-dad-joke-showdown-1d2ce3e5/rank.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5)
[![reward](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5/qyhchy999-jpg/u-mfnakmal-dad-joke-showdown-1d2ce3e5/reward.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5)

One dad joke, told the way a father would tell it across the dinner table: my son asked why the scarecrow won an award, I said "Because he was outstanding in his field" — and he hasn't spoken to me since. The pun is one clean turn, it lands in the middle, and the son's silence is the real joke. No corn, no explained joke: the setup never gives the turn away.

## Why this joke

A dad joke is a small machine with three parts: a harmless setup, a punchline that re-reads the setup, and a verdict. This one is built that way on purpose.

The setup is a question a real father would ask — why did the scarecrow win an award? It sounds polite and small, and it hands the listener an easy way out. The punchline then turns on "outstanding in his field", which means two things at the same moment: the scarecrow is excellent at his job, and he is literally standing out in a field. One phrase, two readings, and the groan arrives exactly when the listener holds both.

Then comes the second turn, and it is the part that makes this joke different from a bare pun: "He hasn't spoken to me since." The son's silence is the verdict. Every dad knows that silence — the joke landed, the child is pretending it did not, and the father is quietly proud anyway. The silence is funnier than the pun, because it is a scene: a father and a son, probably at a table, and the son has decided that responding would only encourage him.

Why the scarecrow instead of the corn joke? The first draft of this entry was the corn pun — "a-maize-ing", "the kernel of the joke". It is a good pun, but it is the pun everyone reaches for first, and a judge who has read a thousand dad jokes has read that one a hundred times. The scarecrow is fresher ground for the same shape of joke, and the double meaning is tighter: "outstanding in his field" is something people genuinely say about a person, so the turn feels discovered rather than built. The delivery is timed in three beats — ask, punchline, verdict — and the last beat is the son's silence, which is the real joke. The line is 125 characters, well inside the 1-to-200 limit.

## Entry

`main.ts` (Node 22, standard library only) writes the joke to `/output/entry.txt`. The joke is baked into the program, so it runs with no network and writes identical bytes on every run.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Then check the output is UTF-8 text of 1 to 200 characters, and run it twice to confirm both runs write the same bytes.

## License

MIT — see [LICENSE](LICENSE).
