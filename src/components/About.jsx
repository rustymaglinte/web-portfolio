import React from "react";
import "./About.css";

const About = () => {
    return (
        <div className="about">
            <div className="about-me">
                <h4>ABOUT ME</h4>
                <p>Hey. I am <span>Rusty Maglinte</span>.</p>
                <p>I'm a Software Developer, Electronics Engineer and a music lover based in the Philippines.</p>
                <p>I can build beautiful, responsive and user-friendly Websites and Apps for you.</p>
                <p>Shoot me a DM. I'm here to help.😊</p>
            </div>
            <div className="tech-stacks">
                <h4>TECH STACK</h4>
                <p>Here are the technologies I use on my projects:</p>
                <div className="technologies">
                    <div className="logo-container">
                        <img
                            src="../../media/web_portfolio_2.0/figma-logo.svg"
                            alt="Figma Logo"
                            className="logo"
                        />
                        <p>Figma</p>
                    </div>
                    <div className="logo-container">
                        <img
                            src="../../media/web_portfolio_2.0/html-logo.svg"
                            alt="HTML Logo"
                            className="logo"
                        />
                        <p>HTML</p>
                    </div>
                    <div className="logo-container">
                        <img
                            src="../../media/web_portfolio_2.0/css-logo.svg"
                            alt="CSS Logo"
                            className="logo"
                        />
                        <p>CSS</p>
                    </div>
                    <div className="logo-container">
                        <img
                            src="../../media/web_portfolio_2.0/javascript-logo.svg"
                            alt="Javascript Logo"
                            className="logo"
                        />
                        <p>JavaScript</p>
                    </div>
                </div>

                <div className="technologies">
                    <div className="logo-container">
                        <img
                            src="../../media/web_portfolio_2.0/react-logo.svg"
                            alt="React.js Logo"
                            className="logo"
                        />
                        <p>React.js</p>
                    </div>
                    <div className="logo-container">
                        <img
                            src="../../media/web_portfolio_2.0/node-js.svg"
                            alt="Node.js Logo"
                            className="logo"
                        />
                        <p>Node</p>
                    </div>
                    <div className="logo-container">
                        <img
                            src="../../media/web_portfolio_2.0/mongodb.svg"
                            alt="MongoDB Logo"
                            className="logo"
                        />
                        <p>MongoDB</p>
                    </div>
                    <div className="logo-container">
                        <img
                            src="../../media/web_portfolio_2.0/react-logo.svg"
                            alt="React Native Logo"
                            className="logo"
                        />
                        <p>React Native</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About;