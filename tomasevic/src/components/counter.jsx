import React from "react";
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

export const Counter = (props) => {
  const minuteSeconds = 60;
  const hourSeconds = 3600;
  const daySeconds = 86400;
  const timerProps = {
    isPlaying: true,
    size: 120,
    strokeWidth: 6
  };

  const renderTime = (dimension, time) => {
    return (
      <div className="time-wrapper">
        <div className="time">{time}</div>
        <div>{dimension}</div>
      </div>
    );
  };

  const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
  const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
  const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
  const getTimeDays = (time) => (time / daySeconds) | 0;
  const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endTime = stratTime + (5 * daySeconds); // Countdown for 5 days

  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;
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
                Nasa web stranica se trenutno azurira i bice aktivna za
                <div className="countdownCircleTimer">
                  <CountdownCircleTimer
                    {...timerProps}
                    colors="#7E2E84"
                    duration={daysDuration}
                    initialRemainingTime={remainingTime}
                  >
                    {({ elapsedTime, color }) => (
                      <span style={{ color }}>
                        {renderTime("dana", getTimeDays(daysDuration - elapsedTime))}
                      </span>
                    )}
                  </CountdownCircleTimer>
                  <CountdownCircleTimer
                    {...timerProps}
                    colors="#D14081"
                    duration={daySeconds}
                    initialRemainingTime={remainingTime % daySeconds}
                    onComplete={(totalElapsedTime) => ({
                      shouldRepeat: remainingTime - totalElapsedTime > hourSeconds
                    })}
                  >
                    {({ elapsedTime, color }) => (
                      <span style={{ color }}>
                        {renderTime("sati", getTimeHours(daySeconds - elapsedTime))}
                      </span>
                    )}
                  </CountdownCircleTimer>
                  <CountdownCircleTimer
                    {...timerProps}
                    colors="#EF798A"
                    duration={hourSeconds}
                    initialRemainingTime={remainingTime % hourSeconds}
                    onComplete={(totalElapsedTime) => ({
                      shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds
                    })}
                  >
                    {({ elapsedTime, color }) => (
                      <span style={{ color }}>
                        {renderTime("minuta", getTimeMinutes(hourSeconds - elapsedTime))}
                      </span>
                    )}
                  </CountdownCircleTimer>
                  <CountdownCircleTimer
                    {...timerProps}
                    colors="#218380"
                    duration={minuteSeconds}
                    initialRemainingTime={remainingTime % minuteSeconds}
                    onComplete={(totalElapsedTime) => ({
                      shouldRepeat: remainingTime - totalElapsedTime > 0
                    })}
                  >
                    {({ elapsedTime, color }) => (
                      <span style={{ color }}>
                        {renderTime("sekundi", getTimeSeconds(elapsedTime))}
                      </span>
                    )}
                  </CountdownCircleTimer>
                </div>
              </p>
              Hvala vam na strpljenju!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
