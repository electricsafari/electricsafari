# Electric Safari

![David](https://img.shields.io/david/electricsafari/electricsafari)
![GitHub issues](https://img.shields.io/github/issues/electricsafari/electricsafari)
![GitHub pull requests](https://img.shields.io/github/issues-pr/electricsafari/electricsafari)
![GitHub last commit](https://img.shields.io/github/last-commit/electricsafari/electricsafari)
![License](https://img.shields.io/github/license/electricsafari/electricsafari)

Electric Safari; an adventure through musical soundscapes ✨

Welcome to the Electric Safari website repository. This repository of code contains the live site on the `master` branch and the in-development features in, get this... the `develop` branch. The main contributers to this repository can be found here: [graphs/contributors](https://github.com/electricsafari/electricsafari/graphs/contributors). The lead developer and point-person for this website is [@rossyman](https://github.com/rossyman).

Thanks for taking the time to check the code out and we hope you enjoy your time at our events! 😊❤️

## Table of Contents

- [Electric Safari](#electric-safari)
- [Table of Contents](#table-of-contents)
- [Technical Information](#technical-information)
- [Firing It Up (🔥↑)](#firing-it-up-)
    - [Running The Site](#running-the-site)
    - [Building The Site](#building-the-site)
    - [Testing The Site](#testing-the-site)
    - [Running With Express](#running-with-express)
- [Quality Checks and Automation](#quality-checks-and-automation)
- [Copyright & Disclaimers](#copyright--disclaimers)

## Technical Information

The website was written using TypeScript v4, Angular v10, Express v4 and a whole host of other libraries for testing. GitHub Actions was used as part of the CI process to ensure code-hygiene, utilising Angular's built-in testing and linting tools.

## Firing It Up (🔥↑)

To run, test or build the website locally, you'll need to have a few things installed:
 - [x] Node.js (LTS - v12) - [Get it here](https://nodejs.org/)
 - [x] NPM (Bundled with Node.js)
 
Once you've installed Node.js, you'll need to checkout the repository:

```bash
git clone https://github.com/electricsafari/electricsafari.git
```

After checking out the `develop` branch (The working branch against which all tested, but pre-prod, commits are made against), you'll then be able to install the NPM dependencies needed for the project to run:

```bash
# 🚨 - Make sure that you've cd'd into the correct directory first
npm install
```

After the dependency installation has completed, you'll be able to use the NPM commands listed below. If you have any questions or issues relating to this process, feel free to [raise an issue here](https://github.com/electricsafari/electricsafari/issues).

### Running The Site

There are two ways in which you can launch the site:
- In dev mode, which is what is used when working on the site: `npm run serve`
- In prod mode, which resembles the live site: `npm run serve:prod`

### Building The Site

There are two ways in which you can build the site, similarly to points above:
- In dev mode, which should only be used in testing environments: `npm run build`
- In prod mode, which is ultimately what is packaged and delivered to web-clients: `npm run build:prod`

### Testing The Site

There are four ways in which you can test the site:
- In a chromium window, running the suite once: `npm run test`
- In a chromium window, running the suite until you exit: `npm run test:watch`
- In a headless chromium window, running the suite once: `npm run test:headless`
- In a headless chromium window, running the suite until you exit: `npm run test:headless:watch`

### Running With Express

In order to run the Express server, you must have already ran one of the build commands set out in the above section on building the application. Only then can you do `npm start`, which will kickstart the Express server and serve the content of the built files to the port `8080`.

## Quality Checks and Automation

As part of an effort to ensure code-quality and hygiene, this repository has been equipped with some automating features:
- Each PR that is raised will automatically have `npm run lint` and `npm run test:headless` checked against the branch, to ensure nothing is broken and that the style guide has been adhered to.
- Dependabot has been enabled to ensure that NPM and GitHub actions dependencies are never outdated within a given scope.
- Stale reviews/approvals on PRs will be removed to ensure no changes are made after-the-fact.

## Copyright & Disclaimers

All imagery, branding and graphics relating to Electric Safari has been reserved for the sole usage of Electric Safari and it's related services. The website itself is licensed under MIT. &copy; 2020 - Electric Safari & Team, see `LICENSE` for more information.
 
