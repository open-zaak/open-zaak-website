module.exports = {
  siteMetadata: {
    title: `OpenZaak`,
    description: `OpenZaak is an open-source case register platform for municipalites who want to deliver citizen-friendly services online.`,
    author: `The OpenZaak Community`,
    repositoryUrl: `https://github.com/open-zaak/`,
    slackUrl: `https://samenorganiseren.slack.com/archives/CT6UH711Q`,
    languages: ['en' ,'nl'],
    defaultLanguage: 'nl'
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-check-links`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-images`,
        ]
      }
    },
    {
      resolve: `gatsby-plugin-plausible`,
      options: {
        domain: `openzaak.org`,
        },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `OpenZaak`,
        short_name: `openzaak`,
        start_url: `/`,
        display: `standalone`,
        icon: `src/images/openzaaklogo.svg`,
      },
    },
    `gatsby-plugin-i18n`,
    {
      resolve: `gatsby-plugin-i18n`,
      options: {
        langKeyDefault: 'nl',
        useLangKeyLayout: false,
        prefixDefault: false,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
