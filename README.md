# OpenZaak website

![Test](https://github.com/open-zaak/open-zaak-website/workflows/Test/badge.svg)
![Deploy website](https://github.com/open-zaak/open-zaak-website/workflows/Deploy%20website/badge.svg)

A website to get potential new users of OpenZaak to get to know it and get them started.

This site is a collaborative project by the OpenZaak community and is meant to be [easy to contribute to](CONTRIBUTING.md).

The website code is a fork of the [Signalen website repository](https://github.com/Signalen/signalen.org), built by the [authors and contributors](AUTHORS.md) within the Signalen community.

## Building, testing and deploying

This site is built using [Gatsby](https://www.gatsbyjs.org/). First make sure you have [Node](https://nodejs.org/en/) installed on your machine. Then install the dependencies with the `npm install` command. After this you can use the `npm start` to start a local webserver and build/update the site.

The website is automatically deployed with pull request on `develop` using a combination Github actions. The workflow for this is configured in `.github/workflows/deploy.yml`.  A deploy script is added to `package.json` with the line ` "deploy": "gatsby build"` . More info about the implementation or additional configuration options refer to https://github.com/marketplace/actions/gatsby-publish.

Pull request to the `develop` branch of this repository are automatically tested by building the Gatsby site using Github actions. The workflow for this is configured in `.github/workflows/ci.yml`

## How to add a news article to the website
You can add a news article to the website by adding a Markdown document to the `pages/news/` folder. The news section of the website has multilingual support. Copy an existing file and edit it. Use the following filename convention: `YYYY-MM-DD-filename.en.md`

Make sure the document includes the following frontmatter:

```
---
path: "/en/news/2021-02-11-filename/"
date: "2021-02-11"
title: "Welcome to the Signalen news"
lang: en
template: default
```

Make sure you set the `path` and `lang` parameters. The lang is used to filter out the specific posts for a particular language.
If you want to provide a Dutch version of your news article make sure you prefix the path with `nl` and your filename includes a language local using the following convention: `YYYY-MM-DD-filename.md` (NOTE: that for the default language set in Gatsby config you don't need to include language code in the filename)

Example:

```
---
path: "/news/2021-02-11-filename/"
date: "2021-02-11"
title: "Welkom op het Signalen nieuws"
lang: nl
template: default
```

For more information on how the news section is implemented refer to (https://www.gatsbyjs.com/blog/2017-07-19-creating-a-blog-with-gatsby/). For more information on how multilingual support is implemented refer to the section 'Localization'

## Localization
This site has basic multilingual support using the gatsby-plugin-i18n.
It is implemented by the guidelines written in this blogpost:
https://www.gatsbyjs.com/blog/2020-02-19-how-to-build-multilingual-sites-with-gatsby/

You can start your won translation by prefixing the extensions of files which serve up pages by using the ISO country codes. Files which do not include such a prefix will be defaulted to the language as configured in the `gatbsy-config.js` file.

```example:
index.en.js serves the english equivalent of that page.
```
The plugin makes all the language specific files available under the site-root/<language code> so in the case of english site-root/en/.

### Navigation menu
The navigation menu uses a a key-value list to translate the separate navigation items. The `pages/menu.json` file
contains all the items and translations. To add a new language simply copy another language array, insert the language code and make the language specific translations.

```
"nl": [
  {
    "title": "Over OpenZaak",
    "link": "/#over-openzaak",
    "partiallyActive": false
  },
```
The footer part of the website is generated using the values listed in the `menu.json` file.

### IMPORTANT: Internal linking from within markdown files ot other markdown files.
Markdown files in the `pages` folder are converted to HTML during build time using the `/templates/default.js script`. Note that when you refer from one markdown file to the other always to include a trailing slash or the GraphQL query will fail and result in a failing build.

### Imported pages do not automatically resolve to language specific versions

Imports in pages need to be referenced explicitly and do not resolve automatically.

For example `import Payoff from '../components/Payoff/` will always resolve to `import Payoff from '../components/Payoff/index.js`. So if you need to reference a language specific version you should indicate the filename `import Payoff from '../components/Payoff/index.en.js`.

In order to add a translation refer to all English related files and make a copy of them including the new language code. Check the `import` statements in the page to check whether they point to the correct translated version of that file.

In the current configuration only the Payoff component and the roadmap page and component needs to be translated in this fashion.

More information about the configuration and implementation can be found here:
https://www.gatsbyjs.com/blog/2020-02-19-how-to-build-multilingual-sites-with-gatsby/


## License

© [The authors and contributors](AUTHORS.md)

Licensed under [EUPLv1.2](LICENSE.md).
