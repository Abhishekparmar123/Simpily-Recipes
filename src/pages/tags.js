import { Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import setupTags from "../Utils/setupTags";
import { graphql } from "gatsby";
import slugify from 'slugify';
import SEO from "../components/seo";

const Tags = ({data:{allContentfulTitle:{nodes:tagsData}}}) =>{
    const tags = setupTags(tagsData);
    console.log(tags)
    return(
        <Layout>
            <SEO title={"Tags"}/>
            <div className="page">
                <section className="tags-page">
                    {
                        tags.map((tag, index) =>{
                            const [text, value] = tag;
                            const slug = slugify(text, {lower:true})
                            return <Link to={`/tags/${slug}`} key={text+index} className='tag'>
                                <h5>{tag}</h5>
                                <p>{value} recipe</p>
                            </Link>
                        })
                    }
                </section>
            </div>
        </Layout>
    )
}

export const query = graphql`
  {
    allContentfulTitle {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

export default Tags;