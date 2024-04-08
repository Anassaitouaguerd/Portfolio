import meImage from "../../assets/images/Me/me.jpg";
export default function SectionDescription() {
  return (
    <section className="hero-area d-flex align-items-center">
      <div className="container custom-container">
        <div className="row">
          <div className="d-flex">
            <div className="col-lg-6">
              <div className="hero-content">
                <h1 className="title">Anass Ait Ouaguerd.</h1>
                <p className="text">
                  Anass Ait Ouaguerd is a skilled Full Stack Developer studying
                  at YouCode Maroc, affiliated with UM6P. With expertise in
                  front-end and back-end development, he has a strong foundation
                  in various programming languages and frameworks. Anass is
                  passionate about problem-solving and continuously learns new
                  technologies to stay updated with industry trends. His
                  meticulous attention to detail and creative mindset drive
                  impactful contributions to collaborative projects.
                </p>
                <a href="#">Get Started</a>
              </div>
            </div>
            <div
              className="hero-thumb animated wow"
              data-wow-duration="1500ms"
              data-wow-delay="10ms"
            >
              <img className="rounded-5" src={meImage} alt="" />
            </div>
          </div>
        </div>
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
