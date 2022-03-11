# Ilknur Business Website

This is a repository for a business website - React/Next application.

## Resource guide

### Scss
- Abstract resources are in styles/abstracts.scss that are registered in next.config.js sassOptions.\
- Component/layout/page independent global styles are in styles/globals.scss imported in pages/\_app.js.\
- Scss modules in styles for pages & components are imported in the same named .js files (~styles/components/button.scss -> ~components/button.js).

## Build Setup

[Node.js](#https://nodejs.org/en/) is a requirement.

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start
```
