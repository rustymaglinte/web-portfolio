import React, { useState } from "react";
import "./WebApps.css";

const WebApps = () => {

    return (
        <div className="apps-container">
            <div className="apps-intro">
                <h4>MY APPS</h4>
                <p>Below are some of the projects I’ve worked on:</p>
            </div>
            <div className="project1">
                <div className="bakery">
                    <h5>Bakery Website</h5>
                    <p>A website template for a bakery business.</p>
                    <button>
                        <a href="https://rustymaglinte.com/bakery1/" target="_blank">
                            See this project →
                        </a>
                    </button>
                </div>
                <div>
                    <img
                        src="../../media/web_portfolio_2.0/baker-img.webp"
                        alt="Bakery Website"
                        className="bakery-photo" />
                </div>
            </div>
            <div className="project2">
                <div>
                    <img
                        src="../../media/web_portfolio_2.0/wed-img.webp"
                        alt="Wedding Website"
                        className="wedding-photo" />
                </div>
                <div className="wedding">
                    <h5>Wedding Website</h5>
                    <p>A wedding website for a lovely couple.</p>
                    <button>
                        <a href="https://rustymaglinte.com/wedding1/" target="_blank">
                            See this project →
                        </a>
                    </button>
                </div>

            </div>
            <div className="project3">
                <div className="aupair">
                    <h5>Au Pair  Website</h5>
                    <p>A website to connect au pairs and hosts.</p>
                    <button>
                        <a href="https://rustymaglinte.com/aupaircentral/" target="_blank">
                            See this project →
                        </a>
                    </button>
                </div>
                <div>
                    <img
                        src="../../media/web_portfolio_2.0/aupair-img.webp"
                        alt="AuPair Website"
                        className="aupair-photo" />
                </div>
            </div>

        </div>
    )
}

export default WebApps;

