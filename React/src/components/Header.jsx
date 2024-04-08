export default function Header() {
  return (
    <header data-scroll-index="0" className="header-area">
      <div className="container custom-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="header-items">
              <div className="header-logo">
                <a href="index.html">
                  {/* <img src={require("./assets/images/logo.png")} alt="" /> */}
                </a>
              </div>
              <div className="header-menu">
                <div className="main_menu menu_two d-flex justify-content-lg-between justify-content-center align-items-center">
                  <nav>
                    <ul>
                      <li>
                        <a className="active" href="index.html">
                          Home <i className="fa fa-angle-down"></i>
                        </a>
                        <ul className="sub_menu">
                          <li>
                            <a href="index.html">Home 1</a>
                          </li>
                          <li>
                            <a href="index-2.html">Home 2</a>
                          </li>
                          <li>
                            <a href="index-3.html">Home 3</a>
                          </li>
                          <li>
                            <a href="index-4.html">Home 4</a>
                          </li>
                          <li>
                            <a href="index-5.html">Home 5</a>
                          </li>
                          <li>
                            <a href="index-6.html">Home 6</a>
                          </li>
                          <li>
                            <a href="index-7.html">Home 7</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="about.html"> About</a>
                      </li>
                      <li>
                        <a href="#">
                          {" "}
                          Portfolio <i className="fa fa-angle-down"></i>
                        </a>
                        <ul className="sub_menu">
                          <li>
                            <a href="portfolio-1.html">Dashboard</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          Pages<i className="fa fa-angle-down"></i>
                        </a>
                        <ul className="sub_menu">
                          <li>
                            <a href="blog.html">Blog</a>
                          </li>
                          <li>
                            <a href="blog-details.html">Blog Details</a>
                          </li>
                          <li>
                            <a href="project-details.html">Project Details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact.html"> Contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="toggle-btn">
                  <div className="canvas_open ">
                    <a href="javascript:void(0)">
                      {/* <img src={require("./assets/images/bars.svg")} alt="" /> */}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
