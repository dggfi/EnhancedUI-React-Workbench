# EnhancedUI React Workbench

[EnhancedUI](https://github.com/viktor-ferenczi/EnhancedUI) replaces sections of the Space Engineers interface with the Chromium browser. This workbench gives you everything you need to start designing your own replacement interfaces, including Space Engineers fonts (streamer kit + custom.) Hopefully both sides of this projects will mature enough to allow anyone to create their own UI component or widget, no matter how small, and slot it into the new UI.

## The General This-and-that
The workflow combines [React](https://reactjs.org/), [Redux](https://redux.js.org/), [Framer-Motion](https://www.framer.com/motion/), [TailwindCSS](https://tailwindcss.com/), [Sass](https://sass-lang.com/), and a few utilities to help automate development. EnhancedUI begins by looking to `localhost:3000` to see if it serves a `Terminal.html`, so an optional `server.js` is provided. This is an express server that will serve the `Terminal.html` located in your `WEBSITE_DIRECTORY`.

### Isn't this overkill?

Yes.

### But this a lot to learn! Where do I even begin?
There are simple examples of React & TailwindCSS used together in the `./examples` directory (hint: `./examples/block_toggle/main.tsx`). These two libraries cover many use cases. Only advanced features such as a state store or animation require Redux and Framer-Motion, respectively.

You can try out the examples yourself by copying the contents into `./src`.

## Setup

1. This Workbench requires Node.js. Install if you haven't done so (https://nodejs.org/en/)
1. Make a copy of `.env_template` and name it `.env`.
1. Set `NODE_ENV` to either "development" or "production"
1. Set `PROJECT_ROOT` to the path of your Workbench directory.
1. Set `WEBSITE_ROOT` to the path of your output directory. For production, this usually this will just be `"C:\Program Files (x86)\Steam\steamapps\common\SpaceEngineers\Bin64\Plugins\Local\EnhancedUI\Content"`
    * You may see node spit out some warnings about outdated or vulnerable packages. Run `npm audit fix` a couple of times to see if that resolves the issue.
1. Run `npm i` to install all of the packages defined in `package.json`
1. Optional, run `node server.js` in a separate terminal.
1. Run `npm run build-dev`
    * This will take a moment. Project assets are large, linting is slow, and there are also improvements that need to be made for this process.
    * Do not be alarmed when it does not yield back control of the terminal. Move on to the next step.
1. Begin editing assets in `src/`
    * You do not need to run `npm run build-dev` for every change that you make. Webpack will watch any changes you make to any files and update your output automatically (and quickly, compared to a fresh bundling)

## Production
1. Set `NODE_ENV` to `'production'`
1. Change `WEBSITE_ROOT` to `"C:\Program Files (x86)\Steam\steamapps\common\SpaceEngineers\Bin64\Plugins\Local\EnhancedUI\Content"`
1. Run `npm run build-production`
1. Your project will become minified

## Using provided assets
1. A few CSS classes are provided for using Space Engineer fonts. They are `font-engineer` (generic w/ fallback) and `font-engineer1`, `font-engineer2`, and `font-engineer3`.

## TypeScript >:(
If you dislike TypeScript, you can disable almost all of its griping by modifying `ts.config.json` and setting `strict`, `noUnusedLocals`, and `noImplicitAny` to `false`. Or, you can write your files with the `.jsx` extension instead.

## A Heads-up

1. If you use the Workbench as instructed, your bundled work will NOT end up in your project directory. Instead, all output is placed in the `Content/` directory of the EnhancedUI plugin folder. Any commits for your repo will not capture the `Content/Terminal.html` your project produces.
2. Using this toolkit will likely overwrite existing UI files in the plugins directory, which may warrant re-installing the plugin if you want to restore the UI provided in the official release (at the time of writing, there is not an official UI.)

## Future
1. Drag & Drop example
1. I can't think of anything else rn. Stay posted