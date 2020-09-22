# chrome-extension-react-starter

## Structure

Support environment on production & local.

- webpack
  - background & browser-action config
  - alias directory

### yarn

- develop
  - `NODE_ENV=development`
  - auto prettier on save（format-watch）
  - browser-action build on save(browser-action-dev)
  - background build on save(background-dev)
- build
  - `NODE_ENV=production`
  - prettier(format)
  - browser-action build(browser-action-build)
  - background build(background-build)
- reset
  - clean yarn cache and delete node_modules directory(clean)
  - install
  - build

### browser-action

Use this.

- React
- styled-components
- mobx

That have chrome extentions helpers.

- Storage(set and get and clear on sync)
- onMessage(runtime message)
- Tabs(create tab)

### background

That have chrome extentions helpers.

- Storage(set and get and clear on sync)
- onMessage(runtime message)
- Notify(notifications)
- Tabs(create tab)

## Start

### On local environment

```sh
# install node modules
yarn install

# Start development
yarn develop
```

and you need check manifest.json in public directory.

You need embed the icons at 16, 19, 48, 128, 19 pixel size.

### On production environment

```sh
# install node modules
yarn install

# Build production
yarn build
```
