# Ilknur Business Website

This is a repository for a business website - React/Next application.

## Resource guide

Styles are bundled up, [BEM](https://en.bem.info/methodology/) is used whenever possible.

### **Scss**

_Styling files are structured according to [7-1 Pattern](https://sass-guidelin.es/#the-7-1-pattern)._

- Abstract resources are in styles/abstracts.scss (entry point for 3rd party abstracts such as bootstrap mixins etc.) that are registered in next.config.js sassOptions.
- Component/layout/page independent global styles are in styles/globals.scss imported in pages/\_app.js.
- Scss modules in styles for pages & components are imported in the same named .js files (~styles/components/button.scss -> ~components/button.js).
- 3rd party scss imports can be found under vendor folder.

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
