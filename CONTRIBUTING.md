# How to contribute

Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md).
By participating in this project you agree to abide by its terms.

We appreciate you taking the time to contribute to `@octoherd/script-rename-master-branch-to-main`. Especially as a new contributor, you have a valuable perspective that we lost a long time ago: you will find things confusing and run into problems that no longer occur to us. Please share them with us, so we can make the experience for future contributors the best it could be.

Thank you 💖

## Creating an Issue

Before you create a new Issue:

1. Please make sure there is no [open issue](https://github.com/octoherd/script-rename-master-branch-to-main/issues?utf8=%E2%9C%93&q=is%3Aissue) yet.
2. If it is a bug report, include the steps to reproduce the issue
3. If it is a feature request, please share the motivation for the new feature, what alternatives you tried, and how you would implement it.

## Setup the repository locally

First, fork the repository.

Setup the repository locally. Replace `<your account name>` with the name of the account you forked to.

```shell
git clone https://github.com/<your account name>/script-rename-master-branch-to-main.git
cd script-rename-master-branch-to-main
npm install
```

Run the tests before making changes to make sure the local setup is working as expected

```shell
npm test
```

## Submitting the Pull Request

- Create a new branch locally.
- Make your changes in that branch and push them to your fork
- Submit a pull request from your topic branch to the main branch on the `octoherd/script-rename-master-branch-to-main` repository.
- Be sure to tag any issues your pull request is taking care of / contributing to. Adding "Closes #123" to a pull request description will automatically close the issue once the pull request is merged in.

## Maintainers only

### Merging the Pull Request & releasing a new version

Releases are automated using [semantic-release](https://github.com/semantic-release/semantic-release).
The following commit message conventions determine which version is released:

1. `fix: ...` or `fix(scope name): ...` prefix in subject: bumps fix version, e.g. `1.2.3` → `1.2.4`
2. `feat: ...` or `feat(scope name): ...` prefix in subject: bumps feature version, e.g. `1.2.3` → `1.3.0`
3. `BREAKING CHANGE:` in body (**Important**: commit body, not subject!): bumps breaking version, e.g. `1.2.3` → `2.0.0`

Only one version number is bumped at a time, the highest version change trumps the others.
Besides publishing a new version to npm, semantic-release also creates a git tag and release
on GitHub, generates changelogs from the commit messages and puts them into the release notes.

If the pull request looks good but does not follow the commit conventions, use the <kbd>Squash & merge</kbd> button.
