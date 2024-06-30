import React from "react";
import Navigation from "../components/Navigation";
import Home from "../components/Home";
import SEO from "../components/SEO";

const HomePage = () => {
    return (
        <div>
            <Navigation />
            <Home words={["SOFTWARE DEVELOPER", "ELECTRONICS ENGINEER", "MUSIC LOVER"]} />
            <SEO
                title={"Rusty Maglinte - Homepage"}
                description={"Hey. I am Rusty Maglinte. I'm a Software Developer, Electronics Engineer and a music lover based in the Philippines. I can build beautiful, responsive and user-friendly Websites and Apps for you. Shoot me a DM. I'm here to help.😊"}
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