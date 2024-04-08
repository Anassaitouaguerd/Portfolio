import React from "react";

export default function SectionExperience() {
  return (
    <section className="about-area">
      <div className="container custom-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h3 className="title">We Do Three Things</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-6">
            <div className="about-item mt-20">
              <h4 className="title">Design</h4>
              <p>
                Home insurance is a type of insurance policy that provides cover
                for your home.
              </p>
              <div className="icon">
                <img
                  // src={require("./assets/images/icon/icon-1.svg").default}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6">
            <div className="about-item mt-20 active">
              <h4 className="title">Marketing</h4>
              <p>
                Home insurance is a type of insurance policy that provides cover
                for your home.
              </p>
              <div className="icon">
                <img
                  // src={require("./assets/images/icon/icon-2.svg").default}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6">
            <div className="about-item item-3 mt-20">
              <h4 className="title">Developing </h4>
              <p>
                Home insurance is a type of insurance policy that provides cover
                for your home.
              </p>
              <div className="icon">
                <img
                  // src={require("./assets/images/icon/icon-3.svg").default}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="about-text">
              <p className="text">
                We help organisations transform their impact. We identify
                opportunities you can uniquely own by analysing your business,
                your market, and cultural shifts in the world. We define your
                north star: why you exist, what makes you unique and what you’re
                here to do in a compelling and differentiating way.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-shape-2">
        <img
          // src={require("./assets/images/shape/shape-6.png").default}
          alt=""
        />
      </div>
    </section>
  );
}
