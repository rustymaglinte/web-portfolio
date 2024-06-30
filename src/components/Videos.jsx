import React, { useState } from "react";
import "./Videos.css";

const Videos = () => {
  return (
    <div className="videos-container">
      <div className="intro-container">
        <h4>MY VIDEOS</h4>
        <p>Just for fun. Here are some of my videos.</p>
        <p>You can find more on <a href="https://www.youtube.com/@rustymaglinte581" target="_blank">my Youtube channel.</a></p>
      </div>
      <div className="video-block">
        {/* <video
          className="video"
          controls={true}
          poster="../../media/web_portfolio_2.0/lion-thumb.webp"
        >
          <source
            src="../../media/web_portfolio_2.0/lions-cut.mp4"
            type="video/mp4"
          />
        </video> */}
        <iframe
          className="video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/6BOiiBgObk8?si=_4zqTBGhXfcfKQoU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <h5>The Lion Sleeps Tonight from “The Lion King”</h5>
        <p>Here’s Simba, Pumbaa and Timon’s song for you.</p>
        {/* <button>
          <a
            href="https://www.youtube.com/watch?v=6BOiiBgObk8&t=5s"
            target="_blank"
          >
            Watch full on Youtube →
          </a>
        </button> */}
      </div>
      <div className="video-block">
        {/* <video
          className="video"
          controls={true}
          poster="../../media/web_portfolio_2.0/river-thumb.webp"
        >
          <source
            src="../../media/web_portfolio_2.0/river-cut.mp4"
            type="video/mp4"
          />
        </video> */}
        <iframe
          className="video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/oYskyAwy32U?si=FA7Y4lqRtoX9VxyG"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <h5>River Flows in You by Yiruma</h5>
        <p>Experience the calmness and music of Yiruma.</p>
        {/* <button>
          <a href="https://www.youtube.com/watch?v=oYskyAwy32U" target="_blank">
            Watch full on Youtube →
          </a>
        </button> */}
      </div>
      <div className="video-block">
        {/* <video
          className="video"
          controls={true}
          poster="../../media/web_portfolio_2.0/aubrey-thumb.webp"
        >
          <source
            src="../../media/web_portfolio_2.0/aubrey-cut.mp4"
            type="video/mp4"
          />
        </video> */}
        <iframe
          className="video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/t94Hk3v2GXs?si=dN4VHHz2dWInZRyo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <h5>Aubrey by Bread</h5>
        <p>A soothing song from the legendary band Bread.</p>
        {/* <button>
          <a href="https://www.youtube.com/watch?v=t94Hk3v2GXs" target="_blank">
            Watch full on Youtube →
          </a>
        </button> */}
      </div>
    </div>
  );
};

export default Videos;
