import { useState, useEffect } from "react";

export default function SectionExperience() {
  const [experiences, setExperienc] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("http://127.0.0.1:8000/api/experiences")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setExperienc(data);
      });
  };
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
          {experiences.map((experience, index) => (
            <div className="col-xl-4 col-lg-6" key={index}>
              <div
                className={`about-item border mt-20 ${
                  index === 1 ? "active" : ""
                }`}
              >
                <h4 className="title">{experience.name}</h4>
                <p> Lieu : {experience.lieu}</p>
                <br />
                <p> Duree : {experience.duree}</p>
                <div className="icon">
                  <img
                    // src={require("./assets/images/icon/icon-1.svg").default}
                    alt=""
                  />
                </div>
              </div>
            </div>
          ))}
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
