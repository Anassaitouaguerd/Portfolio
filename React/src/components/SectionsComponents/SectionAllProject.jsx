import React from "react";

export default function SectionAllProject() {
  return (
    <section className="blog-area">
      <div className="container custom-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h3 className="title">Related Articles</h3>
            </div>
          </div>
        </div>
        <div className="row blog-active">
          <div className="col-lg-4">
            <div className="blog-item">
              <div className="blog-thumb">
                <img
                  // src={require("./assets/images/blog-1.jpg").default}
                  alt=""
                />
                <div className="blog-categories">
                  <ul>
                    <li>
                      <a href="#">Ui design,</a>
                    </li>
                    <li>
                      <a href="#">Marketing</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="blog-content">
                <a href="#">
                  <h3 className="title">Amazing Places To Visit In Summer</h3>
                </a>
                <div className="blog-meta">
                  <div className="admin">
                    <a href="#">
                      By <span>Adame Doe</span>
                    </a>
                  </div>
                  <div className="date">
                    <p>October 20, 2020</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog-item">
              <div className="blog-thumb">
                <img
                  // src={require("./assets/images/blog-2.jpg").default}
                  alt=""
                />
                <div className="blog-categories">
                  <ul>
                    <li>
                      <a href="#">Ui design,</a>
                    </li>
                    <li>
                      <a href="#">Marketing</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="blog-content">
                <a href="#">
                  <h3 className="title">Amazing Places To Visit In Summer</h3>
                </a>
                <div className="blog-meta">
                  <div className="admin">
                    <a href="#">
                      By <span>Adame Doe</span>
                    </a>
                  </div>
                  <div className="date">
                    <p>October 20, 2020</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog-item">
              <div className="blog-thumb">
                <img
                  // src={require("./assets/images/blog-3.jpg").default}
                  alt=""
                />
                <div className="blog-categories">
                  <ul>
                    <li>
                      <a href="#">Ui design,</a>
                    </li>
                    <li>
                      <a href="#">Marketing</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="blog-content">
                <a href="#">
                  <h3 className="title">Amazing Places To Visit In Summer</h3>
                </a>
                <div className="blog-meta">
                  <div className="admin">
                    <a href="#">
                      By <span>Adame Doe</span>
                    </a>
                  </div>
                  <div className="date">
                    <p>October 20, 2020</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Repeat similar code for other blog items */}
        </div>
      </div>
    </section>
  );
}
