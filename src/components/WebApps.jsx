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
          <a href="https://derekt.xyz/" target="_blank">
            <img
              src="/media/web_portfolio_2.0/derekt.webp"
              alt="Trading Bot Web App"
              className="wedding-photo"
            />
          </a>
        </div>
        <div className="wedding">
          <h5>Trading Bot Web App</h5>
          <p>
            A web app for automating cryptocurrency trading strategies.
            Developed using React, Node.js and PostgreSQL.
          </p>
          <button>
            <a href="https://derekt.xyz/" target="_blank">
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
          <a href="https://rustymaglinte.com/pinoysing/" target="_blank">
            <img
              src="/media/web_portfolio_2.0/psing_webapp.webp"
              alt="Karaoke Web App"
              className="aupair-photo"
            />
          </a>
        </div>
      </div>
      <div className="project2">
        <div>
          <a
            href="https://drive.google.com/drive/folders/1U3Im08tyZr15ZcKIkeIhRlqM19isSO9R?usp=sharing"
            target="_blank"
          >
            <img
              src="/media/web_portfolio_2.0/psing_mobileapp.webp"
              alt="Karaoke Mobile App"
              className="wedding-photo"
            />
          </a>
        </div>
        <div className="wedding">
          <h5>Karaoke Mobile App</h5>
          <p>
            This is the android Mobile App version of the above web app. Logic
            is almost the same. Except the front end is developed using React
            Native.
          </p>
          <button>
            <a
              href="https://drive.google.com/drive/folders/1U3Im08tyZr15ZcKIkeIhRlqM19isSO9R?usp=sharing"
              target="_blank"
            >
              Download Android App →
            </a>
          </button>
        </div>
      </div>
      <div className="project1">
        <div className="wedding">
          <h5>Training Institute Website</h5>
          <p>
            A website for a caregiving and healthcare training institute -
            course listings, enrolment inquiries and a blog, managed through a
            custom admin panel. Built with React and a Node/MongoDB backend.
          </p>
          <button>
            <a
              href="https://rustymaglinte.com/integricare/"
              target="_blank"
              rel="noopener noreferrer"
            >
              See this project →
            </a>
          </button>
        </div>
        <div>
          <a
            href="https://rustymaglinte.com/integricare/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/media/web_portfolio_2.0/integricare-img.webp"
              alt="Integricare Training Institute Website"
              className="integricare-photo"
            />
          </a>
        </div>
      </div>
      <div className="project2">
        <div>
          <a href="https://rustymaglinte.com/tictactoe/" target="_blank">
            <img
              src="/media/web_portfolio_2.0/tictactoe.webp"
              alt="Tic-Tac-Toe Web App"
              className="wedding-photo"
            />
          </a>
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
          <a href="https://rustymaglinte.com/bakery1/" target="_blank">
            <img
              src="/media/web_portfolio_2.0/baker-img.webp"
              alt="Bakery Website"
              className="aupair-photo"
            />
          </a>
        </div>
      </div>
      <div className="project2">
        <div>
          <a href="https://rustymaglinte.com/wedding1/" target="_blank">
            <img
              src="/media/web_portfolio_2.0/wed-img.webp"
              alt="Wedding Website"
              className="wedding-photo"
            />
          </a>
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
          <a href="https://rustymaglinte.com/aupaircentral/" target="_blank">
            <img
              src="/media/web_portfolio_2.0/aupair-img.webp"
              alt="AuPair Website"
              className="aupair-photo"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default WebApps;
