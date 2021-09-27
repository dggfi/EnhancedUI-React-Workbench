# EnhancedUI React Workbench

## What's included

EnhancedUI uses Chromium for its UI, and this repo gives you everything you need to start designing React components, including Space Engineers fonts (streamer kit + custom.) For now, all output is placed in the `Content/` directory of the EnhancedUI plugin folder.

**WARNING**: Using this toolkit will likely overwrite existing UI files in the plugins directory, which may warrant re-installing the plugin if you want to restore the UI provided in the official release (at the time of writing, there is not an official UI.)

EnhandedUI knows to query `localhost:3000` when looking for `Terminal.html`. An optional `server.js` is provided. It will only work if your `WEBSITE_DIRECTORY` is set to `"C:\Program Files (x86)\Steam\steamapps\common\SpaceEngineers\Bin64\Plugins\Local\EnhancedUI\Content"`

## How to use

1. This Workbench requires Node.js. Install if you haven't done so (https://nodejs.org/en/)
1. Make a copy of <.env_template> and rename it to <.env>.
1. Set `NODE_ENV` to either "development" or "production"
1. Set `PROJECT_ROOT` to the path of your Workbench directory.
1. Set `WEBSITE_ROOT` to the path of your `Content/` directory. Usually this will just be `"C:\Program Files (x86)\Steam\steamapps\common\SpaceEngineers\Bin64\Plugins\Local\EnhancedUI\Content"`
1. Run `npm i --save-dev` to install all of the packages defined in `package.json`
1. Optional, run `node server.js`
1. Run `npm run build-client`
    * This will take a moment. Project assets are large, linting is slow, and there are also improvements that need to be made for this process.
    * Do not be alarmed when it does not yield back control of the terminal. Move on to the next step.
1. Begin editing assets in `src/`
    * You do not need to run `npm run build-client` for every change that you make. Webpack will watch any changes you make to any files and update your output automatically (and quickly, compared to a fresh bundling)

## A Heads-up

1. If you use the Workbench normally, your output will most likely NOT end up in your project directory, so any commits for your repo will not capture the Terminal.html in your project.