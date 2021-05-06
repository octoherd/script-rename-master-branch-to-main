# script-rename-master-branch-to-main

> Renames the default branch to main if it is currently set to master

[![@latest](https://img.shields.io/npm/v/@octoherd/script-rename-master-branch-to-main.svg)](https://www.npmjs.com/package/@octoherd/script-rename-master-branch-to-main)
[![Build Status](https://github.com/octoherd/script-rename-master-branch-to-main/workflows/Test/badge.svg)](https://github.com/octoherd/script-rename-master-branch-to-main/actions?query=workflow%3ATest+branch%3Amain)

## Usage

Note: Your GitHub account must have owner or admin permission in order to rename the default branch on a repository

Minimal usage

```js
npx @octoherd/script-rename-master-branch-to-main
```

Pass all options as CLI flags to avoid user prompts

```js
npx @octoherd/script-rename-master-branch-to-main \
  -T ghp_0123456789abcdefghjklmnopqrstuvwxyzA \
  -R "octoherd/*"
```

## Options

| option                       | type             | description                                                                                                                                                                                                                                 |
| ---------------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--octoherd-token`, `-T`     | string           | A personal access token ([create](https://github.com/settings/tokens/new?scopes=repo)). Script will create one if option is not set                                                                                                         |
| `--octoherd-repos`, `-R`     | array of strings | One or multiple space-separated repositories in the form of `repo-owner/repo-name`. `repo-owner/*` will find all repositories for one owner. `*` will find all repositories the user has access to. Will prompt for repositories if not set |
| `--octoherd-bypass-confirms` | boolean          | Bypass prompts to confirm mutating requests                                                                                                                                                                                                 |

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)

## About Octoherd

[@octoherd](https://github.com/octoherd/) is project to help you keep your GitHub repositories in line.

## License

[ISC](LICENSE.md)
