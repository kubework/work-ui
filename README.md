# Work UI Components

<img src="https://github.com/kubework/work-ui/blob/master/src/assets/images/logo.png?raw=true" alt="Work Image" height="200px">

Set of React components used by [Work Workflows](https://github.com/kubework/work-workflows) and [Work CD](https://github.com/kubework/work-cd).

## Build & Run

1. Install Toolset: [NodeJS](https://nodejs.org/en/download/) and [Yarn](https://yarnpkg.com)
1. Install Dependencies: From your command line, navigate to the work-ui directory and run `yarn install` to install dependencies.
1. Run: `yarn start` - starts https://storybook.js.org/ dev server

## Local Development

To test your changes locally against Work CD or another Work project, we recommend using [yalc](https://github.com/wclr/yalc).

First, install `yalc`:

```
npm i -g yalc
```

Next, in your local `work-ui` directory, run

```
yalc publish
```

Finally, in your local `work-cd/ui` directory, run

```
yalc add work-ui
```

Your local changes to the `work-ui` package will now be seen by your local `work-cd`.
