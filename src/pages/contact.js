import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/seo";

const Contact = () =>{
    return(
        <Layout>
            <SEO title={"Contact Page"}/>
            <main className="page">
                <section className="contact-page">
                    <article className="contact-info">
                        <h3>Want To Get In Touch?</h3>
                        <p>
                            Four dollar toast biodiesel plaid salvia actually pickled banjo
                            bespoke mlkshk intelligentsia edison bulb synth.
                        </p>
                        <p>Cardigan prism bicycle rights put a bird on it deep v.</p>
                        <p>
                            Hashtag swag health goth air plant, raclette listicle fingerstache
                            cold-pressed fanny pack bicycle rights cardigan poke.
                        </p>
                    </article>
                    <article>
                        <form 
                            className="form contact-form"
                            action="https://formspree.io/f/xdobydpb"
                            method="POST"
                        >
                            <div className="form-row">
                                <label htmlFor="name">your name</label>
                                <input type="text" name="name" id="name" />
                            </div>
                            <div className="form-row">
                                <label htmlFor="email">your email</label>
                                <input type="text" name="email" id="email" />
                            </div>
                            <div className="form-row">
                                <label htmlFor="message">message</label>
                                <textarea name="message" id="message"></textarea>
                            </div>
                            <button type="submit" className="btn block">
                                submit
                            </button>
                        </form>
                    </article>
                </section>
                <section className="featured-recipes">
                    <h5>Look at this Awesome souse!</h5>
                </section>
            </main>
        </Layout>
    )
}

export default Contact;