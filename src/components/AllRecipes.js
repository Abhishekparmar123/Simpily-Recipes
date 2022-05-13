import React from 'react'
import RecipesList from './RecipesList'
import TagsList from './TagsList'
import { graphql, useStaticQuery } from 'gatsby'

const query = graphql`
  {
    allContentfulTitle(
      sort: {fields: contentful_id, order: ASC}
      filter: {featured: {eq: true}}
    ) {
      nodes {
        id
        title
        description {
          description
        }
        prepTime
        servings
        cookTime
        images {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
        content {
          tags
        }
      }
    }
  }
`


function AllRecipes() {
    const {
        allContentfulTitle: {
            nodes: recipes
        }
    } = useStaticQuery(query);
    
    console.log(recipes)
    return (
        <section className='recipes-container'>
            <TagsList recipes={recipes}/>
            <RecipesList recipes={recipes}/>
        </section>
    )
}

export default AllRecipes