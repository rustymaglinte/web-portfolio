import React from "react";
import Navigation from "../components/Navigation";
import Blogs from "../components/Blogs";
import SEO from "../components/SEO";

const BlogsPage = () => {
    return (
        <div>
            <Navigation />
            <Blogs />
            <SEO
                title={"Rusty Maglinte - Blog Page"}
                description={"This one's a Work in Progress. Will update for you soon."}
                photo={
                    <img
                        src="../../media/web_portfolio_2.0/blog.webp"
                        alt="Blog Photo"
                    />}
            />
        </div>
    )
}

export default BlogsPage;