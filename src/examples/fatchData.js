import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const data = graphql`
    {
      site {
        siteMetadata {
          title
          desc
          author
          person {
            name
            age
          }
          simpleData
          complexData {
            name
            age
          }
        }
      }
    }`;

const FetchData = () => {
    const {
        site:{
            siteMetadata:
                {title, author},
        }
    } = useStaticQuery(data);
    return <div>
        <h4>Title: {title}</h4>
        <h4>Title: {author}</h4>
    </div>
}

export default FetchData
