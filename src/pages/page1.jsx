import "./mainStyle.css";
import React from "react";
import background from "./background.png";
import salad from "./salad.jpg";
function Page1() {
  return (
    <React.Fragment>
    <div className="container p-0 m-0">
      <div className="row">
      <div className="col-12">
      <img
        src={background}
        alt="mountain"
        className="img1"
        style={{ width: '1366px', height: "540px"}}
      />
      </div>
      </div>
      <div className="centered">
        <p className="centerhead display-1">Only Quality Food</p>
        <br />
        <p>
          Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architectoeaque ipsa quae ab illo
          inventore.{" "}
        </p>
        <br />
        <button className="btn btn-outline-warning btns">VIEW MENU</button>
        <button className="btn btn-warning btnss ms-2">RESERVATION</button>
        <br />
        <br />
        <br />
        <br />
        <br />
        <i className="fa fa-arrow-down"></i>
      </div><br/>
    <div className="container ms-5 p-5 mt-5">
    <div className="row ms-4">
      <div className="col-7 mt-5 textpar">
        <span>OUR STORY</span>
        <div className="row m-2 ms-0 col-1 head"></div>
        <br />
        <h1 className="centerhead display-4 text-dark">Welcome To Royal</h1><br/>
        <p className=" textpar1">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit. doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo. Nemo enim ipsam voluptatem quia
          voluptas sit aspernatur aut odit aut fugit.
        </p>
        <p className=" textpar1">
          Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo. Sed
          ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto.
        </p>
        <br />
      </div>
      <div className="col-5">
      <img
        src={salad}
        alt="salad"
        style={{ width: "500px", height: "730px" }}
      />
      </div>
      </div>
      </div>
    </div>
        <div className="centered1">
        <div  className="row centered2 justify-content-center">
        <span className="textpar">ONLY THE BEST</span>
        <div className="col-1 border border-warning"></div>
            <p className="centerhead display-4 mt-3">Fresh Ingredient, Testy Meals</p>
            <br /><br/>
            <p className="textpar1">
              Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architectoeaque ipsa quae
              ab illo inventore.{" "}
            </p>
            <br />
            <p><button className="btn btn-warning btnss">VIEW MENU</button></p>
          </div>
        </div>
        </React.Fragment>
  );
}
export default Page1;
