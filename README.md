# talk_2024-11-12_NuxtNation-conference

## project overview

This project contains the slides for my talk titled `Playing with Nuxt in 3D` on 2024-11-12 at the [NuxtNation 2024](https://nuxtnation.com/) conference (online).

The presented, repository and documentation language is `English`.

You can find pre deployed slides here, so that you can view them without the need of pulling the code and setting the project up yourself:<br>
\[currently not deployed\]

## dev

### initial setup

#### VM ID

Development VM ID from Thorsten Seyschab for this project: `014`<br>
(Only interesting to him.)

#### system requirements for developing

The following softwares are required for development:<br>
(The versions listed were the ones I most recently used for development and testing. So try sticking with them.)

| software | command for version output                | my version at last use | information          |
| -------- | ----------------------------------------- | ---------------------- | -------------------- |
| Ubuntu   | `lsb_release -a` or `cat /etc/os-release` | 22.04.4 LTS            | OS                   |
| Linux    | `uname -r`                                | 5.15.0-119-generic     | Linux Kernel         |
| VSCode   | `code -v`                                 | 1.93.2                 | IDE                  |
| nvm      | `nvm -v`                                  | v0.39.7                | Node Version Manager |
| Node     | `node -v` (old `nodejs --version`)        | v20.16.0               | NodeJS/ Node.js      |
| npm      | `npm -v`                                  | v10.8.1                |                      |
| npx      | `npx -v`                                  | v10.8.1                |                      |
| pnpm     | `pnpm -v`                                 | v9.10.0                |                      |

In the browser install:

- [VueJS Devtools](https://devtools.vuejs.org/guide/installation.html)

#### project setup

1. execute a `git pull`
2. open project in VSCode
3. If you work with VSCode via remote software:
   - `{Ctrl}+{Shift}+{P}` -> `>Preferences: Open Settings (UI)` -> search for `keyboard.dispatch` and set it to `keyCode`
   - Restart or reload VSCode.
4. Install recommended extensions/ plugins:
   - Open Extensions menu in VSCode (`{Ctrl}+{Shift}+{X}`)
   - type in the search `@recommended`
   - install and enable the plugins
   - see file `.vscode/extensions.json` for configuring some of the extensions
   - Restart or reload VSCode.
5. In VSCode on the bottom left click your profile image and log in all services (GitHub due to VSCode extensions, ...)<br>
   If the browser to VSCode callback fails, wait for the login popup on the bottom right to timeout (ca. 5 minutes) and
   then on the upcoming popup question `You have not yet finished authorizing [...] Would you like to try a different way? (local server)` click `Yes` and use this alternative login mechanic.<br>
   (When you do not want to wait for the timeout to happen, you can also click the `Cancel` to trigger the dialog faster.)
6. Install dependencies: `pnpm i`
7. Happy coding <3

### Docs and helper websites

\[currently none\]

## prod

Will use the build command out of `/package.json`.<br>
Building, deploying and hosting is done via \[not yet decided\].

## Attribution/ Contribution

Head of project:

- [Thorsten Seyschab](https://todde.tv)

Honorable mentions to people and projects that helped this project:

\[currently none\]

Used services, dependencies and materials - besides the ones in `./package.json`:

- [GitHub Copilot](https://github.com/features/copilot) was used in private mode for programming questions.

## License

Private, only for Thorsten Seyschab.
For more information see [LICENSE](./LICENSE) file.
Copyright (c) 2024-present, [Thorsten Seyschab](https://todde.tv)
