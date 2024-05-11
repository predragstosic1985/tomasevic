import React from "react";
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

export const Counter = (props) => {
  // Duration for 5 days in seconds
  const duration = 5 * 24 * 60 * 60;

  // Function to format remaining time
  const formatTime = (time) => {
    const days = Math.floor(time / (3600 * 24));
    const hours = Math.floor((time % (3600 * 24)) / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    return `${days}d ${hours}h ${minutes}m`;
  };
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/2.webp" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>TOMAŠEVIĆ</h2>
              <p>
                <CountdownCircleTimer
                  isPlaying
                  duration={duration}
                  colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
                  onComplete={() => console.log('Timer completed')}
                >
                  {({ remainingTime }) => formatTime(remainingTime)}
                </CountdownCircleTimer>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
