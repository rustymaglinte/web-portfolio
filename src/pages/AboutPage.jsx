import React from "react";
import Navigation from "../components/Navigation";
import About from "../components/About";
import SEO from "../components/SEO";

const AboutPage = () => {
    return (
        <div>
            <Navigation />
            <About />
            <SEO
                title={"Rusty Maglinte - About Page"}
                description={"Hey. I am Rusty Maglinte. I'm a Web Developer, Electronics Engineer and a music lover based in the Philippines. I can build beautiful, responsive and user-friendly Web Apps and Websites for you. Shoot me a DM for any Web needs that you have."}
                photo={
                    <img
                        src="../../media/web_portfolio_2.0/about.webp"
                        alt="About Page Photo"
                    />}
            />
        </div>
    )
}

export default AboutPage;