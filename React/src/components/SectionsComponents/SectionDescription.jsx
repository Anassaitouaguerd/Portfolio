import React from "react";

export default function SectionDescription() {
  return (
    <section className="hero-area d-flex align-items-center">
      <div className="container custom-container">
        <div className="row">
          <div className="col-lg-6">
            <div className="hero-content">
              <h1 className="title">Christopher Felami.</h1>
              <p className="text">
                I’m Michal Škvarenina, a multi-disciplinary designer currently
                working at Wild and as a freelance designer. I specialize in
                building digital experiences and creating brands. You can find
                me
              </p>
              <a href="#">Get Started</a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="hero-thumb animated wow fadeInRight"
        data-wow-duration="1500ms"
        data-wow-delay="10ms"
      >
        {/* <img src={require("./assets/images/wellcome-thumb.jpg")} alt="" /> */}
      </div>
      <div className="hero-shape">
        {/* <img src={require("./assets/images/shape/shape-5.jpg")} alt="" /> */}
      </div>
      <div className="hero-scroll">
        <a data-scroll-nav="1" href="#">
          <span>S</span>
          <span>C</span>
          <span>R</span>
          <span>O</span>
          <span>L</span>
          <span>L</span>
        </a>
      </div>
    </section>
  );
}
