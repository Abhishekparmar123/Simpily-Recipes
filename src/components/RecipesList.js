import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from 'gatsby';
import slugify from 'slugify';

function RecipesList({ recipes = [] }) {
  return (
    <div className='recipes-list'>
        {
            recipes.map((recipe, index) =>{
                const {id, title, images, prepTime, cookTime} = recipe;
                const slug = slugify(title, {lower:true});
                {/* console.log(id, title, images) */}
                const pathToImage = getImage(images.gatsbyImageData);
                return(
                    <Link key={id} to={`/${slug}`} className="recipe">
                        <GatsbyImage 
                            image={pathToImage} 
                            className='recipe-img' 
                            alt={title}
                        />
                        <h5>{title}</h5>
                        <p>Prep : { prepTime } | Cook : { cookTime }</p>
                    </Link>
                )
            })
        }
    </div>
  )
}

export default RecipesList