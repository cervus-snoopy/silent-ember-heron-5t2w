# Post X: Promote make.fun's make-your-own-bounty

[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/cervus-snoopy/silent-ember-heron-5t2w/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/cervus-snoopy/silent-ember-heron-5t2w/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

An entry for the [make.fun bounty "Promote make.fun's make-your-own-bounty post on X"](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01).

## What this is

A tiny Node 22 program with no dependencies and no network access. Its only job is to copy `POST.json` — the address of the X post that quotes make.fun's make-your-own-bounty announcement — from the repository root into the output directory, byte for byte.

The post itself lives on X, quoting make.fun's post (https://x.com/makefunai/status/2124915864336236646), published from the public account [@unimeta_verse](https://x.com/unimeta_verse) with a photo made for it. Replies, reposts and quotes of that post are what the bounty scores.

## Run

```sh
node main.ts
```

`main.ts` reads `POST.json` next to itself and writes an identical copy to `$MAKEFUN_OUTPUT_DIR/POST.json` (or `./output/POST.json` when the variable is unset), creating the directory first. It always exits 0 and produces the same bytes on every run.

## Files

- `main.ts` — the copier, no dependencies, no network.
- `POST.json` — the X post address, as `{"url": "..."}`.
- `LICENSE` — MIT.

## License

MIT — see [LICENSE](LICENSE).

## Notes

- The program never touches the network and has no dependencies: Node 22 only.
- The output is deterministic — run it twice from any directory and the
  `POST.json` in the output directory is byte-identical both times.
- The placeholder `status/0` in `POST.json` is replaced with the real post
  address once the post is published on X.
