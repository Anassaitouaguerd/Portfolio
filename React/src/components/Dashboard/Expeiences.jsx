import { useEffect, useState } from "react";

export default function Experiences() {
  const [projects, setProjects] = useState([]);
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
        setProjects(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handlData = async (e) => {
    e.preventDefault();
    const name_experience = document.getElementById("name_experience").value;
    const lieu = document.getElementById("lieu").value;
    const duree = document.getElementById("duree").value;
    const data = {
      name: name_experience,
      lieu: lieu,
      duree: duree,
    };
    try {
      const response = await fetch("http://127.0.0.1:8000/api/experiences", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      await response.json();
    } catch (error) {
      console.log("Error : ", error);
    }
  };
  fetchData();
  return (
    <div className="col-12 mt-4">
      <div className="card mb-4">
        <div className="card-header pb-0 p-3">
          <h6 className="mb-1">Projects</h6>
          <p className="text-sm">Architects design houses</p>
        </div>
        <div className="card-body p-3">
          <div className="row">
            {projects.map((project, index) => (
              <div className="col-xl-3 col-md-6 mb-xl-0 mb-4" key={index}>
                <div className="card card-blog card-plain">
                  <div className="card-body pb-0 px-1 text-center">
                    <p className="text-gradient text-dark mb-2 text-sm">
                      <h5>Name : {project.name}</h5>
                    </p>
                    <p className="text-gradient text-dark mb-2 text-sm">
                      <h5>Lieu : {project.lieu}</h5>
                    </p>
                    <p className="text-gradient text-dark mb-2 text-sm">
                      <h5>Duree : {project.duree}</h5>
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div className="col-xl-3 col-md-6 mb-xl-0 mb-4">
              <div className="card h-100 card-plain border">
                <div className="card-body d-flex flex-column justify-content-center text-center">
                  <button
                    className="bg-transparent border-0"
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                  >
                    <i className="fa fa-plus text-secondary mb-3"></i>
                    <h5 className=" text-secondary"> New project </h5>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Modal title
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form id="myForm">
                <div className="form-group">
                  <label htmlFor="Name project">Name experience:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name_experience"
                    placeholder="Enter name experience"
                    name="name_experience"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Lieu">Lieu:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lieu"
                    placeholder="Enter lieu"
                    name="lieu"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="duree">Duree (annee):</label>
                  <input
                    type="number"
                    className="form-control"
                    id="duree"
                    placeholder="Enter duree"
                    name="duree"
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-secondary me-4"
                  data-dismiss="modal"
                >
                  cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  data-dismiss="modal"
                  onClick={handlData}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
