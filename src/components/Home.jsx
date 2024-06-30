import React, { useState, useEffect } from "react";
import "./Home.css";

const Home = ({ words }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(timer); // Cleanup the timer when the component unmounts
  }, [words.length]);

  return (
    <div>
      <div className="home">
        <div className="intro">
          <h3>Hi. My name is</h3>
          <h1>RUSTY</h1>
          <h2>{words[currentIndex]}</h2>
          <button>
            <a href="mailto: support@rustymaglinte.com">Get in touch</a>
          </button>
        </div>
        <div className="icons">
          <a href="https://github.com/rustymaglinte/" target="_blank">
            <img
              src="../../media/web_portfolio_2.0/github.png"
              alt="Github Icon"
              className="icon"
            />
          </a>
          <a href="https://www.facebook.com/maglinterusty/" target="_blank">
            <img
              src="../../media/web_portfolio_2.0/facebook-icon.svg"
              alt="Facebook Icon"
              className="icon"
            />
          </a>
          <a href="https://www.youtube.com/@rustymaglinte581" target="_blank">
            <img
              src="../../media/web_portfolio_2.0/youtube-icon.svg"
              alt="Facebook Icon"
              className="icon"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/rusty-maglinte-143a12147/"
            target="_blank"
          >
            <img
              src="../../media/web_portfolio_2.0/linkedin-icon.svg"
              alt="Facebook Icon"
              className="icon"
            />
          </a>
        </div>
        <div>
          <img
            src="../../media/web_portfolio_2.0/prof-img.webp"
            srcSet="../../media/web_portfolio_2.0/prof-img1.webp 768w, ../../media/web_portfolio_2.0/prof-img2.webp 480w"
            sizes="(max-width: 860px) 860px, (max-width: 480px) 480px, 1600px"
            alt="Rusty Maglinte's photo"
            className="profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
