import React from "react";
import "./mainStyle.css";
import p1 from "./p1.jpeg";
import p2 from "./p2.jpeg";
import p3 from "./p3.jpeg";
import p4 from "./p4.jpeg";
import p5 from "./p5.jpeg";
import p6 from "./p6.jpeg";
import p7 from "./p7.jpeg";
import p8 from "./p8.jpeg";
import p9 from "./p9.jpeg";

function Page2() {
  return (
    <div className="bg-dark p-0 m-0">
      <div className="container">
        <div className="row">
          <div className="col-4 divcolor text-center">
            <div className="maincard">
              <h5 className="mainh">$26.95</h5>
              <h3 className="display-7 text-center centerhead">
                Grilled Fillet
              </h3>
              <span className="maintext">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt.
              </span>
            </div>
          </div>
          <div className="col-4 m-0 p-0">
            <img src={p1} alt="..." width="380px" height="290px" />
          </div>
          <div className="col-4 divcolor text-center">
            <div className="maincard">
              <h5 className="mainh">$53.3</h5>
              <h3 className="display-7 text-center centerhead">
                Chicken Breast
              </h3>
              <span className="maintext">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt.
              </span>{" "}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-4 m-0 p-0 text-center">
            <img src={p2} alt="..." width="380px" height="290px" />
          </div>
          <div className="col-4 divcolor text-center">
            <div className="maincard">
              <h5 className="mainh">$40.5</h5>
              <h3 className="display-7 text-center centerhead">King Crab</h3>
              <span className="maintext">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt.
              </span>
            </div>
          </div>
          <div className="col-4 m-0 p-0 text-center">
            <img src={p3} alt="..." width="380px" height="290px" />
          </div>
        </div>
        <div className="row">
          <div className="col-4 divcolor text-center">
            <div className="maincard">
              <h5 className="mainh">$40.5</h5>
              <h3 className="display-7 text-center centerhead">Sea Trout</h3>
              <span className="maintext">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt.
              </span>
            </div>
          </div>
          <div className="col-4 m-0 p-0 text-center">
            <img src={p4} alt="..." width="380px" height="290px" />
          </div>
          <div className="col-4 divcolor text-center">
            <div className="maincard">
              <h5 className="mainh">$22.3</h5>
              <h3 className="display-7 text-center centerhead">
                Roasted Bakra
              </h3>
              <span className="maintext">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt.
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-4 m-0 p-0 text-center">
            <img src={p5} alt="..." width="380px" height="290px" />
          </div>
          <div className="col-4 divcolor text-center">
            <div className="maincard">
              <h5 className="mainh">$22.3</h5>
              <h3 className="display-7 text-center centerhead">
                Roasted Bakra
              </h3>
              <span className="maintext">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt.
              </span>
            </div>
          </div>
          <div className="col-4 m-0 p-0 text-center">
            <img src={p6} alt="..." width="380px" height="290px" />
          </div>
        </div>
      </div>
      <div className="container centered3">
        <div className="row centered2 justify-content-center text-center">
          <span className="textpar">TESTIMONIALS</span>
          <div className="col-1 border border-warning"></div>
          <p className="centerhead display-5 mt-3">What People are Saying</p>
          <br />
          <br />
        </div>
        <div className="row rowclass">
          <div className="col colclass">
            <p>
              <i class="fas fa-star checked"></i>
              <i class="fas fa-star checked"></i>
              <i class="fas fa-star checked"></i>
              <i class="fas fa-star checked"></i>
              <i class="fas fa-star checked"></i>
            </p>
            <p className="ptext">"A Great Find"</p>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              en ante eu lectus ornare porta."
            </p>
            <p className="fw-bold">Divi</p>
          </div>
          <div className="col colclass">
            <p>
              <i class="fas fa-star checked"></i>
              <i class="fas fa-star checked"></i>
              <i class="fas fa-star checked"></i>
              <i class="fas fa-star checked"></i>
              <i class="fas fa-star checked"></i>
            </p>
            <p className="ptext">"Fabulous food & flawless service"</p>

            <p>
              "Nunc molestie eros nec eros auctor, a dapibus diam iaculis.
              Aliquam erat volutpat."
            </p>
            <p className="fw-bold">Bloom</p>
          </div>
          <div className="col colclass">
            <p>
              <i class="fas fa-star checked"></i>
              <i class="fas fa-star checked"></i>
              <i class="fas fa-star checked"></i>
              <i class="fas fa-star checked"></i>
              <i class="fas fa-star checked"></i>
            </p>
            <p className="ptext">"Another successful experience"</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam
              ante eu lectus ornare porta.
            </p>
            <p className="fw-bold">Extra</p>
          </div>
          <div className="col colclass">
            <p>
              <i class="fas fa-star checked"></i>
              <i class="fas fa-star checked"></i>
              <i class="fas fa-star checked"></i>
              <i class="fas fa-star checked"></i>
              <i class="fas fa-star checked"></i>
            </p>
            <p className="ptext">"Speechless"</p>
            <p>
              "Nunc molestie eros nec eros auctor, a dapibus diam iaculis.
              Aliquam erat volutpat."
            </p>
            <p className="fw-bold">Monarch</p>
          </div>
        </div>

        <div className="container centered4">
          <div className="row centered2 justify-content-center text-center">
            <span className="textpar">DON'T MISS</span>
            <div className="col-1 border border-warning"></div>
            <p className="centerhead display-6 mt-3">Our News And Events</p>
            <br />
            <p className="textpar1">
              Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.{" "}
            </p>
            <br />
            <br />
          </div>
          <div className="row rowclass1">
            <div class="col-4 colclass1" style={{ width: "18rem" }}>
              <img
                src={p7}
                alt="..."
                style={{ width: "288px", height: "180px" }}
              />
              <div class="cbody">
                <h5 class="mb-2">Nunc Volupat Venenatis</h5>
                <span className="category">CATEGORY</span>
                <p class="mt-2">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit. doloremque laudantium, totam rem aperiam,
                  eaque ipsa quae ab illo.
                </p>
              </div>
            </div>
            <div class="col-4 colclass1" style={{ width: "18rem" }}>
              <img
                src={p8}
                style={{ width: "288px", height: "180px" }}
                alt="..."
              />
              <div class="cbody">
                <h5 class="mb-2">Vestibulum Nisl Felis</h5>
                <span className="category">CATEGORY</span>
                <p class="mt-2">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            <div class="col-4 colclass1" style={{ width: "18rem" }}>
              <img
                src={p9}
                style={{ width: "288px", height: "180px" }}
                alt="..."
              />
              <div class="cbody">
                <h5 class="mb-2">Proin Eu Augue Efficitur</h5>
                <span className="category">CATEGORY</span>
                <p class="mt-2">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam.
                </p>
              </div>
            </div>
          </div>
          <p className="text-center mt-5">
            <button className="btn btn-warning btnsss">READ MORE</button>
          </p>
        </div>
      </div>
      <div className="container centered5">
        <div className="row rowclass2 text-center">
          <div class="col colclass2 bg-dark text-light">
            <div class="fbody">
              <h2 class="centerhead mb-5 mt-3">Hours of Operation</h2>
              <span className="footer1">
                <span>MON-FRI</span>
                <br />
                <span>10:00am - 1:00pm</span>
                <br />
                <span>4:00pm - 10:30pm</span>
                <div className="col border border-warning mt-3 mb-3"></div>
                <span>SAT</span>
                <br />
                <span>3:00pm - 10:30pm</span>
                <div className="col border border-warning mt-3 mb-3"></div>
                <span>SUN</span>
                <br />
                <span>We are closed</span>
                <p className="text-center mt-5">
                  <button className="btn  btn-secondary btnsss">
                    MAKE A RESERVATION
                  </button>
                </p>
              </span>
            </div>
          </div>
          <div class="col colclass2 bg-dark text-light">
            <div class="fbody1">
              <h3 class="mt-3 fw-normal">Drop Us a Line</h3>
              <span>Don't be shy. Let us know if you have any questions!</span>
              <br />
              <p className="text-center mt-3 mb-3">
                <button className="btn btn-secondary btnsss">CONTACT US</button>
              </p>
              <h3 class="mt-5 fw-normal">Our Newsletter</h3>
              <span>Dialogue is an essential part of any script</span>
              <br />
              <div className="form-group row">
                <input
                  className="form-control form1"
                  type="text"
                  value="First Name"
                />
                <input
                  className="form-control form1"
                  type="text"
                  value="Last Name"
                />
                <input
                  className="form-control form1"
                  type="text"
                  value="Email"
                />
                <button
                  type="button"
                  className="btn  btn-secondary btnsss btn-lg btn-block form1"
                >
                  CONTACT US
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row d-flex justify-content-between align-items-center bg-dark my-2 py-2 text-light">
          <div className="col-md-6 d-flex justify-content-center">
            <span className="footertext">
              Designed by <b>Elegant Themes</b> | Powered by <b>WordPress</b>
            </span>
          </div>

          <ul className="nav col-md-4 justify-content-center d-flex">
            <li className="ms-3">
              <a className="text-secondary" href="/">
                <i className="fa fa-facebook fa-2x"></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-secondary" href="/">
                <i className="fa fa-twitter fa-2x"></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-secondary" href="/">
                <i className="fa fa-google-plus fa-2x"></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-secondary" href="/">
                <i className="fa fa-wifi fa-2x"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container bg-light pt-4"></div>
    </div>
  );
}
export default Page2;
