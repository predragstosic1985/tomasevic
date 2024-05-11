import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  DOBRODOŠLI NA MORE
                  <span></span>
                </h1>
                <p>NUDIMO VAM PRELEP SMEŠTAJ NA NAJLEPŠEM DELU JADRANA</p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  O nama
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
