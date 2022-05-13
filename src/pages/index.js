import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import styled from "styled-components";
import FetchData from "../examples/fatchData";
import AllRecipes from "../components/AllRecipes";
import SEO from "../components/seo";

export default function Home() {
  return <Layout>
    <SEO title={"Home"} desc={"This is my home page"}/>
    <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpeg"
            alt="eggs"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          ></StaticImage>
          <div className="hero-container">
            <div className="hero-text">
              <h1>simply recipes</h1>
              <h4>no fluff, just recipes</h4>
            </div>
          </div>
        </header>
        <AllRecipes/>
      </main>
  </Layout>
}

const Wrapper = styled.section`
  color: #dcd7d7;
  background-color: #2ea0e1;
  text-align: center;
  padding: 20px;
  font-size: 20px;
  margin-top: 20px;
  border-radius: 10px;
  h1{
    color: white;
  }
`