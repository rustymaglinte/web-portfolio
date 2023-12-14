import React from "react";
import Navigation from "../components/Navigation";
import WebApps from "../components/WebApps";
import SEO from "../components/SEO";

const WebAppsPage = () => {
    return (
        <div>
            <Navigation />
            <WebApps />
            <SEO
                title={"Rusty Maglinte - Web Apps Page"}
                description={"Here are some of the projects I’ve worked on."}
                photo={
                    <img
                        src="../../media/web_portfolio_2.0/webapps.webp"
                        alt="Web Apps Photo"
                    />}
            />
        </div>
    )
}

export default WebAppsPage;