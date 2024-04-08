import { useState, useEffect } from "react";

export default function SectionFormation() {
  const [formations, setFormations] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("http://127.0.0.1:8000/api/formations")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setFormations(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

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
              {formations.map((formation, index) => (
                <div className="col-md-6" key={index}>
                  <div className="services-3-item mt-40">
                    <div className="icon">
                      <img
                        // src={
                        //   // require("./assets/images/icon/services-1.png").default
                        // }
                        alt="icon"
                      />
                    </div>
                    <h5 className="title">{formation.name}</h5>
                    <p>Comapny : {formation.company}</p>
                    <p>Lieu : {formation.lieu}</p>
                    <p>Date Start : {formation.Date_start}</p>
                    <p>Date end : {formation.Date_end}</p>
                  </div>
                </div>
              ))}
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
