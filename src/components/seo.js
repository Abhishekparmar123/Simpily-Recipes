import React from 'react'
import {Helmet} from 'react-helmet';
import {graphql, useStaticQuery} from 'gatsby';

const query = graphql`
{
    site {
      siteMetadata {
        title
        desc
      }
    }
}
`

function SEO({title, desc}) {
    const {site} = useStaticQuery(query)
    const metaDesc = desc || site.siteMetadata.desc
    return (
        <Helmet title={`${title} | ${site.siteMetadata.title}`} meta={[{name:"description", content:metaDesc}]}></Helmet>
    )
}

export default SEO