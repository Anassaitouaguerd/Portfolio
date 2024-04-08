import React from "react";

export default function SectionFormation() {
  return (
    <section data-scroll-index="1" className="services-3-area">
      <div className="container custom-container">
        <div className="row">
          <div className="col-lg-4">
            <div className="section-title">
              <h3 className="title">What I Do!</h3>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="section-text">
              <p>
                I’m Michal Škvarenina, a multi-disciplinary designer currently
                working at Wild and as a freelance designer. I specialize in
                building digital experiences and creating brands. You can find
                me
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-end">
          <div className="col-lg-7">
            <div className="row">
              <div className="col-md-6">
                <div className="services-3-item mt-40">
                  <div className="icon">
                    <img
                      // src={
                      //   // require("./assets/images/icon/services-1.png").default
                      // }
                      alt="icon"
                    />
                  </div>
                  <h5 className="title">Curated content</h5>
                  <p>
                    Home insurance is a type of insurance policy that provides
                    cover for your home.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="services-3-item mt-40">
                  <div className="icon">
                    <img
                      // src={
                      //   // require("./assets/images/icon/services-2.png").default
                      // }
                      alt="icon"
                    />
                  </div>
                  <h5 className="title">Curated content</h5>
                  <p>
                    Home insurance is a type of insurance policy that provides
                    cover for your home.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="services-3-item mt-40">
                  <div className="icon">
                    <img
                      // src={
                      //   // require("./assets/images/icon/services-3.png").default
                      // }
                      alt="icon"
                    />
                  </div>
                  <h5 className="title">Curated content</h5>
                  <p>
                    Home insurance is a type of insurance policy that provides
                    cover for your home.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="services-3-item mt-40">
                  <div className="icon">
                    <img
                      // src={
                      //   // require("./assets/images/icon/services-4.png").default
                      // }
                      alt="icon"
                    />
                  </div>
                  <h5 className="title">Curated content</h5>
                  <p>
                    Home insurance is a type of insurance policy that provides
                    cover for your home.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="services-shape animated wow fadeInLeft"
        data-wow-duration="1500ms"
        data-wow-delay="300ms"
      >
        <img
          // src={require("./assets/images/shape/shape-1.jpg").default}
          alt="shape"
        />
      </div>
    </section>
  );
}
