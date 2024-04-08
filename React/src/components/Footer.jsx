import React from "react";

export default function Footer() {
  return (
    <footer className="footer-area">
      <div className="footer-copyright">
        <div className="container custom-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="copyright-items d-block d-md-flex align-items-center justify-content-between">
                <div className="footer-logo">
                  <a href="#">
                    <img
                      //   src={require("./assets/images/logo-2.png").default}
                      alt="logo"
                    />
                  </a>
                </div>
                <div className="footer-social">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-youtube-play"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer-copyright-text">
                  <p>
                    Copyright{" "}
                    <a href="https://themeforest.net/user/quomodotheme">
                      quomodotheme
                    </a>{" "}
                    2021
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
