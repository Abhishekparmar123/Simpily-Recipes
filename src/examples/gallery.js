import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const query = graphql`
{
    allFile(filter: {extension: {ne: "svg"}}) {
      pageInfo {
        totalCount
      }
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            transformOptions: {grayscale: false}
            width: 200
            height:200
          )
        }
      }
    }
  }
`

function Gallery() {
    const data = useStaticQuery(query);
    const nodes = data.allFile.nodes;
    return (
        <>
            <h2>Simple Image gallery</h2>
            <Wrapper>
                {
                    nodes.map((image, index) =>{
                        const {name} = image;
                        const pathToImage = getImage(image);
                        {/* console.log(image.childImageSharp.gatsbyImageData) */}
                        return(
                            <article key={index} style={{textAlign:'center'}}>
                                <GatsbyImage image={pathToImage}  alt={name} className="gallery-img"/>
                                <p >{name}</p>
                            </article>
                        )
                    })
                }
            </Wrapper>
        </>
    )
}

const Wrapper = styled.section`
    display: flex;
    flex-wrap: wrap;
    article{
        padding: 10px;
    }
    .gallery-img{
        border-radius: 10px;
    }
`

export default Gallery;