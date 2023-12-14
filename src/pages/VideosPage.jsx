import React from "react";
import Navigation from "../components/Navigation";
import Videos from "../components/Videos";
import SEO from "../components/SEO";

const VideosPage = () => {
    return (
        <div>
            <Navigation />
            <Videos />
            <SEO
                title={"Rusty Maglinte - Videos Page"}
                description={"Just for fun. Here are some of my videos. You can find more on my Youtube channel."}
                photo={
                    <img
                        src="../../media/web_portfolio_2.0/videos.webp"
                        alt="Videos Photo"
                    />}
            />
        </div>
    )
}

export default VideosPage;