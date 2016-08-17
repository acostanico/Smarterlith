# Smarterlith

> Smarterlith front end app, built using the Vue.js framework and its plugins (MVVM framework) + Webpack (module packing) + NPM (dependency managment).

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Project structure (quick peek)

./build (Webpack config)
./config (NPM profiles config)
./node_modules (dependencies)
./src
  ./assets (images, fonts, additional CSS)
  ./components (Vue.js HTML-SASS-JAVASCRIPT components)
      ./views (page routed view components)
      ./commons (reusable components)
      ./services (Javascript services)
      ./Home.vue (Main app component)
  ./routes.js (router)
./index.html (SPA main page)
./package.json (NPM dependency list)
