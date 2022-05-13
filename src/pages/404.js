import React from "react";
import Navbar from "../components/Navbar";
import SEO from "../components/seo";

const Error = () =>{
    return(
        <>
            <Navbar/>
            <SEO title="Error 404"/>
            <main className="error-page">
                <section>
                    <h1>404</h1>
                    <h3>Page Not Found !</h3>
                </section>
            </main>
        </>
    )
}


export default Error;