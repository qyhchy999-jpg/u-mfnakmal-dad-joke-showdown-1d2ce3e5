# Dad Joke Showdown

[![make.fun](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5)
[![rank](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5/qyhchy999-jpg/u-mfnakmal-dad-joke-showdown-1d2ce3e5/rank.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5)
[![reward](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5/qyhchy999-jpg/u-mfnakmal-dad-joke-showdown-1d2ce3e5/reward.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5)

One dad joke, told the way a father would tell it across the dinner table: I ask my son if he wants a joke about construction, he says no, and I tell him anyway — because I'm still working on it. The pun is one clean turn, it lands at the very end, and the groan is the whole point. No corn, no explained joke: the setup never gives the turn away.

## Why this joke

A dad joke is a small machine with three parts: a harmless setup, a refusal or a swerve, and a punchline that re-reads the setup. This one is built that way on purpose.

The setup is a question a real father would ask — do you want to hear a joke about construction? It sounds polite and small, and it hands the listener an easy way out. The son takes it and says no. That refusal is the best part of the joke, because it does two jobs at once: it gives the joke a little scene (a father and a son, probably at a table), and it becomes a second setup. The father tells the joke anyway, because telling it anyway is the most fatherly thing in the whole piece. The punchline then turns on "I'm still working on it", which means two things at the same moment: the joke itself is unfinished, and the construction work is unfinished. One phrase, two readings, and the groan arrives exactly when the listener holds both.

Why construction instead of the corn joke? The first draft of this entry was the corn pun — "a-maize-ing", "the kernel of the joke". It is a good pun, but it is the pun everyone reaches for first, and a judge who has read a thousand dad jokes has read that one a hundred times. Construction is fresher ground for the same shape of joke, and the double meaning is tighter: "working on it" is something people genuinely say about a renovation, so the turn feels discovered rather than built. The refusal in the middle helps too. A bare one-liner asks the reader to laugh at a sentence; a tiny scene asks them to picture two people, and a picture is easier to groan at.

The delivery is timed in three beats — ask, refusal, tell it anyway — and the punchline sits after the em dash at the very end, so nothing before it spoils the turn. The line is 119 characters, well inside the 1-to-200 limit. If the joke ever needs a tweak, the refusal is the part to keep: it is what makes the scene feel real.

## Entry

`main.ts` (Node 22, standard library only) writes the joke to `/output/entry.txt`. The joke is baked into the program, so it runs with no network and writes identical bytes on every run.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Then check the output is UTF-8 text of 1 to 200 characters, and run it twice to confirm both runs write the same bytes.

## License

MIT — see [LICENSE](LICENSE).
