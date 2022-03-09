<br>
<p align="center">
  <a target="_blank" href="https://lionzcss.vercel.app">
    <img src="https://weblionz.com/lionzcss/lionzcss.png" alt="lionzcss logo" width="150" height="150">
  </a>
</p>

<h3 align="center">Lionzcss</h3>

<p align="center">
A light-weight UI React.js component library 
  <br>
  <a href="https://lionzcss.vercel.app/overview"><strong>Explore lionzcss docs »</strong></a>
  <br>
  <br>
  <a href="https://github.com/anasbehhari/lionzcss-library/issues/new?assignees=-&labels=bug&template=bug_report.yml">Report bug</a>
  ·
  <a href="https://github.com/anasbehhari/lionzcss-library/issues/new?assignees=&labels=feature&template=feature_request.yml">Request feature</a>
</p>

## Lionzcss

The largest components library ready to use for Better Design !
Build rich, interactive web applications quickly, with high quality design and results
Join our growing community of developers using lionzcss

Collection of professionally designed, pre-built, fully responsive HTML snippets you can drop into your projects

## Quick start

Several quick start options are available:

- [Download the latest release](https://github.com/anasbehhari/lionzcss-library/archive/refs/heads/master.zip)
- Clone the repo: `git clone https://github.com/anasbehhari/lionzcss-library.git`
- Install with [npm](https://www.npmjs.com/): `npm install lionzcss`
- Install with [yarn](https://yarnpkg.com/): `yarn add lionzcss`
- Include with [CDN](https://lionzcss.vercel.app): CSS: `https://lionzcss-api.herokuapp.com/api/css/lionzcss` Sass: `https://lionzcss-api.herokuapp.com/api/scss/lionzcss`

Read the [Getting started page](https://lionzcss.vercel.app/overview) for information on the framework contents, templates and examples, and more.

## How to use
run the command 
```bash
npm install lionzcss
```
Then import your components you can see [all components here](https://lionzcss.vercel.app/components)
```javascript
import { Message,Alert } from "lionzcss";
function App() {
  return (
    <>
      <Message type="success">
        <b> VERY IMPORTANT</b> : please make sure to double check that the form below has all the correct information
      </Message>
      <Alert type="error" title="Please make sure to eliminate All special carachters" >
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure vitae ab illum fugit error, laborum iusto cumque, ratione voluptates quod maiores eos, harum non alias. Qui deleniti dolore itaque corrupti.</p>
      </Alert>
    </>
  );
}

export default App;
```
## CDN Archicture

- [Visit Our API](https://lionzcss.vercel.app)

By using our API you'll have access to diffrent type of files `.css` or `.scss` and `.js`.
<br>
here down below you'll see the Archicture which shows how to use our API

```text
lionzcss/
├── css/
│   ├── cards.css
│   ├── popups.css
│   ├── buttons.css
│   ├── alerts.css
│   ├── tables.css
└── scss/
│   ├── cards.scss
│   ├── popups.scss
│   ├── buttons.scss
│   ├── alerts.scss
│   ├── tables.scss
└── js/
│   ├── cards.js
│   ├── popups.js
│   ├── buttons.js
│   ├── alerts.js
│   ├── tables.js
```

We provide compiled CSS and JS (`bootstrap.*`), as well as compiled and minified CSS and JS (`bootstrap.min.*`). [Source maps](https://developers.google.com/web/tools/chrome-devtools/javascript/source-maps) (`bootstrap.*.map`) are available for use with certain browsers' developer tools. Bundled JS files (`bootstrap.bundle.js` and minified `bootstrap.bundle.min.js`) include [Popper](https://popper.js.org/).


## Creators

**Anas Behhari**

- <https://twitter.com/anasbehhari>
- <https://github.com/anasbehhari>


## Sponsors

Support this project by becoming a sponsor. Your logo will show up here with a link to your website. [[Become a sponsor](https://opencollective.com/bootstrap#sponsor)]

<a href="https://polygon.technology/"> 
<img src="https://polygon.technology/_nuxt/img/polygon-logo.99647ca.svg" alt="polygon Logo" width="192" height="42">
</a>

<a href="https://runpondr.com/"> 
<img src="https://uploads-ssl.webflow.com/603544ca5ab072022b0ccc86/6035482d019e4710d79c7e46_pondr-logo.svg" alt="runpondr Logo" width="192" height="42">
</a>
<br>
## Copyright and license

Code and documentation copyright 2021-2022 the [lionzcss Authors](https://github.com/anasbehhari/lionzcss-libary/graphs/contributors). Code released under the [MIT License](https://github.com/anasbehhari/lionzcss-libary/blob/main/LICENSE).
