module.exports = {
  siteMetadata: {
    title: 'Adrian Situ Design Code',
    description: 'Personal Website Portfolio',
    keywords: 'website portfolio, react website, font-end developer, creating a website, portfolio, building a portfolio'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'z0ifjv8xeqh1',
        accessToken: 'efciOuZiSCWnGhq18IXg6e6k-9FdEDLCS06hh_cJuKo'
      }
    }
  ],
}
