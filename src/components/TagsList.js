import { Link } from 'gatsby';
import React from 'react';
import slugify from 'slugify';
import setupTags from '../Utils/setupTags'

function TagsList({recipes}) {
    const tags = setupTags(recipes);
    // console.log(tags)
    return (
        <div className='tag-container'>
            <h4>Recipes</h4>
            <div className='tags-list'>
                {
                    tags.map((tag, index) =>{
                        const [text, value] = tag
                        const slug = slugify(text, {lower:true})
                        return <Link key={text+index} to={`/tags/${slug}`}>{text} ({value})</Link>
                    })
                }
            </div>
        </div>
    )
}

export default TagsList