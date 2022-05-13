import { Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import RecipesList from "../components/RecipesList";
import { graphql } from "gatsby";
import SEO from "../components/seo";

const About = ({ data:{allContentfulTitle:{nodes:recipes}} }) =>{
    return(
        <Layout>
            <SEO title={'About'} desc={"This is my about page"}/>
            <main className="page">
                <section className="about-page">
                    <article>
                        <h2>I'm baby coloring book poke taxidermy</h2>
                        <p>
                            Taxidermy forage glossier letterpress heirloom before they sold
                            out you probably haven't heard of them banh mi biodiesel chia.
                        </p>
                        <p>
                            Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia
                            retro.
                        </p>
                        <Link to="/contact" className="btn">
                            contact
                        </Link>
                    </article>
                    <StaticImage
                        src="../assets/images/about.jpeg"
                        alt="Person Pouring Salt in Bowl"
                        className="about-img"
                        placeholder="blurred"
                    />
                    </section>
                    <section className="featured-recipes">
                        <h5>Look at this Awesome souse!</h5>
                        <RecipesList recipes={recipes} />
                </section>
            </main>
        </Layout>
    )
}

export const query = graphql`
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
      }
    }
  }
`

export default About