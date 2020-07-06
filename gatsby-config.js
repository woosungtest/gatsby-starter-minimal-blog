require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `샌드`,
    // Default title of the page
    siteTitleAlt: `샌드 - Gatsby 정적사이트입니다.`,
    // Can be used for e.g. JSONLD
    siteHeadline: `샌드 - Gatsby 정적사이트입니다.`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://sand.ga`,
    // Used for SEO
    siteDescription: `정적사이트 생성기 Gatsby로 만든 블로그입니다. 기능도 많고 상당히 깔끔해서 꾸미기 좋은 테마라고 생각합니다.`,
    // Will be set on the <html /> tag
    siteLanguage: `ko`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`,
    // Twitter Handle
    author: `@solut2000`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `블로그`,
            slug: `/blog`,
          },
          {
            title: `알아보기`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/lekoarts_de`,
          },
          {
            name: `Instagram`,
            url: `https://www.instagram.com/lekoarts.de/`,
          },
        ],
        formatString: `YYYY.MM.DD`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `minimal-blog - @lekoarts/gatsby-theme-minimal-blog`,
        short_name: `minimal-blog`,
        description: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and code highlighting.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
