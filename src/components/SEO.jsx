import React from "react";
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, photo }) => {

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description}></meta>
            <meta property="og:image" content={photo}></meta>
            <meta name="author" content="Rusty Maglinte" />
            <meta
                name="keywords"
                content="Rusty Maglinte, Rusty, Maglinte, Web Developer, Developer, Website Developer, Landing Page Builder"
            />
        </Helmet>
    );
}

export default SEO;
