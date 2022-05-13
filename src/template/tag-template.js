import React from 'react'
import {graphql} from 'gatsby';
import Layout from '../components/Layout';
import RecipesList from '../components/RecipesList';
import SEO from '../components/seo';
function tagTemplate(props) {
    console.log(props)
    const recipes = props.data.allContentfulTitle.nodes;
    const title = props.pageContext.tag;
    return (
        <Layout>
            <SEO title={title}/>
            <main className="page">
                <h2>{title}</h2>
                <div className="tag-recipes">
                    <RecipesList recipes={recipes}/>
                </div>
            </main>
        </Layout>
    )
}

export const query = graphql`
    query getRecipeByTag($tag: String) {
        allContentfulTitle(
        filter: {content: {tags: {eq: $tag}}}
        sort: {fields: title, order: ASC}
        ) {
            nodes {
                id
                title
                cookTime
                prepTime
                images {
                gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
                }
            }
        }
    }
`
  

export default tagTemplate