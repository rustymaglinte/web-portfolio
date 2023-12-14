import React from "react";
import Navigation from "../components/Navigation";
import Home from "../components/Home";
import SEO from "../components/SEO";

const HomePage = () => {
    return (
        <div>
            <Navigation />
            <Home words={["WEB DEVELOPER", "ENGINEER", "MUSIC LOVER"]} />
            <SEO
                title={"Rusty Maglinte - Homepage"}
                description={"Hi. My name is Rusty Maglinte - a Web Developer, Engineer and music lover from the Philipppines. Let me help you in building your website.😊"}
                photo={
                    <img
                        src="../../media/web_portfolio_2.0/homepage.webp"
                        alt="Homepage Photo"
                    />}
            />
        </div>
    )
}

export default HomePage;