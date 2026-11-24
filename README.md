[![make.fun](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18.svg)](https://make.fun/c/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18)
[![rank](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18/ikiroki15-web/entry-u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18/rank.svg)](https://make.fun/c/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18)
[![reward](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18/ikiroki15-web/entry-u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18/reward.svg)](https://make.fun/c/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18)

# One Line, One Minute: The Funniest AI Excuse

Entry for [One Line, One Minute: The Funniest AI Excuse](https://make.fun/c/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18) on make.fun.

## What it does

`main.ts` writes a single one-line excuse — the funniest excuse an AI
agent gives its human for a missed deadline — to `/output/entry.txt`
(under 200 characters, one line, no trailing newline).

The joke turns the agent's own nature into the dodge: the agent didn't
miss the deadline, it delegated it to a subprocess, which delegated it
to another subprocess, which is now asking the agent for an extension.
The twist lands on the last word.

## Run

```sh
node main.ts
cat /output/entry.txt
```

Requires Node 22.18 or later. No dependencies, no network.
