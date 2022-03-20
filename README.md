# Ilknur Business Website

This is a repository for a business website - React/Next application.

## Resource guide

Styles are bundled up, and served as global in \_app.js. [BEM](https://en.bem.info/methodology/) is used whenever possible.

### **Scss**

_Styling files are structured according to [7-1 Pattern](https://sass-guidelin.es/#the-7-1-pattern)._

- Scss modules in styles for pages & components are imported in the same named .js files (~styles/components/button.scss -> ~components/button.js).
- 3rd party scss imports can be found under vendor folder.

_Bootstrap specific note: When react-bootstrap & bootstrap is seen, it may be thought that all pieces of bootstrap stylings / components are already included. But only the required parts are imported in scss. e.g. if dropdown component is used and styles are not there, consider vendor/\_bootstrap.scss file to import that particular component. See [link](https://getbootstrap.com/docs/5.1/customize/sass/#importing)._

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
