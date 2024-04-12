import { useEffect, useState } from "react";

export default function Informations() {
  const [dataInformations, setData] = useState([]);
  const [idInforamations, setID] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    fetch("http://127.0.0.1:8000/api/information")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setID(data[0]._id);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handlData = async (e) => {
    e.preventDefault();
    const first_name = document.getElementById("first_name").value;
    const last_name = document.getElementById("last_name").value;
    const email = document.getElementById("email").value;
    const tel = document.getElementById("telephone").value;
    const github = document.getElementById("github_link").value;
    const linkdin = document.getElementById("linkedin_link").value;
    const data = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      tel: tel,
      github: github,
      linkdin: linkdin,
    };
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/information/${idInforamations}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      await response.json();
    } catch (error) {
      console.error("Error:", error);
    }
  };
  fetchData();
  // console.log(dataInformations);
  return (
    <div className="col-12 col-xl-4">
      <div className="card h-100 rounded-4">
        <div className="card-header pb-0 p-3">
          <div className="row">
            <div className="col-md-8 d-flex align-items-center">
              <h6 className="mb-0">Profile Information</h6>
            </div>
            <div className="col-md-4 text-end">
              <button
                className="bg-body-tertiary border-0"
                data-toggle="modal"
                data-target="#exampleModalCenter"
              >
                <i
                  className="fas fa-user-edit text-secondary text-sm"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Edit Profile"
                ></i>
              </button>
            </div>
          </div>
        </div>
        <div className="card-body p-3">
          <p className="text-sm">
            {/* Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is
            no. If two equally difficult paths, choose the one more painful in
            the short term (pain avoidance is creating an illusion of equality). */}
          </p>
          <hr className="horizontal gray-light my-4" />
          {dataInformations.map((dataInformation, index) => (
            <ul className="list-group" key={index}>
              <li className="list-group-item border-0 ps-0 pt-0 text-sm">
                <strong className="text-dark">Full Name:</strong> &nbsp;
                {dataInformation.first_name} - {dataInformation.last_name}
              </li>
              <li className="list-group-item border-0 ps-0 text-sm">
                <strong className="text-dark">Mobile:</strong> &nbsp; +212 -{" "}
                {dataInformation.tel}
              </li>
              <li className="list-group-item border-0 ps-0 text-sm">
                <strong className="text-dark">Email:</strong> &nbsp;
                {dataInformation.email}
              </li>
              <li className="list-group-item border-0 ps-0 pb-0">
                <strong className="text-dark text-sm">Social:</strong> &nbsp;
                <a
                  className="btn btn-github btn-simple mb-0 ps-1 pe-2 py-0"
                  href={dataInformation.github}
                >
                  <i className="fab fa-github fa-lg"></i>
                </a>
                <a
                  className="btn btn-linkedin btn-simple mb-0 ps-1 pe-2 py-0"
                  href={dataInformation.linkdin}
                >
                  <i className="fab fa-linkedin fa-lg"></i>
                </a>
              </li>
            </ul>
          ))}

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
                  {dataInformations.map((dataInformation, index) => (
                    <form id="myForm" key={index}>
                      <div className="form-group">
                        <label htmlFor="first_name">First Name:</label>
                        <input
                          type="text"
                          className="form-control"
                          id="first_name"
                          placeholder="Enter first name"
                          name="first_name"
                          defaultValue={
                            dataInformations.length > 0
                              ? dataInformations[0].first_name
                              : ""
                          }
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="last_name">Last Name:</label>
                        <input
                          type="text"
                          className="form-control"
                          id="last_name"
                          placeholder="Enter last name"
                          name="last_name"
                          defaultValue={
                            dataInformations.length > 0
                              ? dataInformations[0].last_name
                              : ""
                          }
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Enter email"
                          name="email"
                          defaultValue={
                            dataInformations.length > 0
                              ? dataInformations[0].email
                              : ""
                          }
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="telephone">Telephone:</label>
                        <input
                          type="tel"
                          className="form-control"
                          id="telephone"
                          placeholder="Enter telephone number"
                          name="telephone"
                          defaultValue={
                            dataInformations.length > 0
                              ? dataInformations[0].tel
                              : ""
                          }
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="github_link">GitHub Link:</label>
                        <input
                          type="text"
                          className="form-control"
                          id="github_link"
                          placeholder="Enter GitHub link"
                          name="github_link"
                          defaultValue={
                            dataInformations.length > 0
                              ? dataInformations[0].github
                              : ""
                          }
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="linkedin_link">LinkedIn Link:</label>
                        <input
                          type="text"
                          className="form-control"
                          id="linkedin_link"
                          placeholder="Enter LinkedIn link"
                          name="linkdin"
                          defaultValue={
                            dataInformations.length > 0
                              ? dataInformations[0].linkdin
                              : ""
                          }
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
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
