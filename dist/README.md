## TypeScript Template Data Source For Grafana

### Development

To install and build the plugin:

1. `git clone` this project into your `data/plugins` subdirectory in your Grafana instance.
2. `yarn install --pure-lockfile`
3. `grunt`
4. `karma start --single-run` to run the tests once.
5. Restart your Grafana server to start using the plugin in Grafana (Grafana only needs to be restarted once).

`grunt watch` will build the TypeScript files and copy everything to the dist directory automatically when a file changes. This is useful for when working on the code. `karma start` will turn on the karma file watcher so that it reruns all the tests automatically when a file changes.

The plugin is written in TypeScript and changes should be made in the `src` directory. The build task transpiles the TypeScript code into JavaScript and copies it to the `dist` directory. Grafana will load the JavaScript from the `dist` directory and ignore the `src` directory.

### CHANGELOG

#### v0.0.1

- First version.
