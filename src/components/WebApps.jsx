import React, { useState } from "react";
import "./WebApps.css";

const WebApps = () => {
  return (
    <div className="apps-container">
      <div className="apps-intro">
        <h4>MY APPS</h4>
        <p>Below are some of the projects I’ve worked on:</p>
      </div>
      <div className="project2">
        <div>
          <img
            src="../../media/web_portfolio_2.0/tictactoe.webp"
            alt="Tic-Tac-Toe Web App"
            className="wedding-photo"
          />
        </div>
        <div className="wedding">
          <h5>Tic-Tac-Toe Game Web App</h5>
          <p>
            The all-time-loved tic-tac-toe game for you to play - saves your
            progress each round. Developed using the MERN stack.
          </p>
          <button>
            <a href="https://rustymaglinte.com/tictactoe/" target="_blank">
              See this project →
            </a>
          </button>
        </div>
      </div>
      <div className="project1">
        <div className="wedding">
          <h5>Karaoke Web App</h5>
          <p>
            A web app where anyone can sing along to their favorite songs.
            Server-side logic is being run on Node.js and MongoDB and is
            responsive to any device screen size.
          </p>
          <button>
            <a href="https://rustymaglinte.com/pinoysing/" target="_blank">
              See this project →
            </a>
          </button>
        </div>
        <div>
          <img
            src="../../media/web_portfolio_2.0/psing_webapp.webp"
            alt="Karaoke Web App"
            className="aupair-photo"
          />
        </div>
      </div>
      <div className="project2">
        <div>
          <img
            src="../../media/web_portfolio_2.0/psing_mobileapp.webp"
            alt="Karaoke Mobile App"
            className="wedding-photo"
          />
        </div>
        <div className="wedding">
          <h5>Karaoke Mobile App</h5>
          <p>
            This is the android Mobile App version of the above web app. Logic
            is almost the same. Except of course the front end is developed
            using React Native.
          </p>
          <button>
            <a
              href="https://play.google.com/store/apps/details?id=com.rustymaglinte.PinoySing"
              target="_blank"
            >
              Download on Google Play →
            </a>
          </button>
        </div>
      </div>
      <div className="project1">
        <div className="wedding">
          <h5>Bakery Website</h5>
          <p>
            A website template for a bakery business. Components have been
            developed with the help of React Bootstrap and Material Design
            Bootstrap.
          </p>
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
            className="aupair-photo"
          />
        </div>
      </div>
      <div className="project2">
        <div>
          <img
            src="../../media/web_portfolio_2.0/wed-img.webp"
            alt="Wedding Website"
            className="wedding-photo"
          />
        </div>
        <div className="wedding">
          <h5>Wedding Website</h5>
          <p>
            A wedding website for a lovely couple. Components were also
            developed with the help of React Bootstrap.
          </p>
          <button>
            <a href="https://rustymaglinte.com/wedding1/" target="_blank">
              See this project →
            </a>
          </button>
        </div>
      </div>
      <div className="project1">
        <div className="wedding">
          <h5>Au Pair Website</h5>
          <p>
            A website to connect au pairs and hosts. Also developed using React
            Bootstrap and Material Design Bootstrap.
          </p>
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
            className="aupair-photo"
          />
        </div>
      </div>
    </div>
  );
};

export default WebApps;
