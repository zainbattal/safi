import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./footer";
export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="welcomingCont">
        <h1
          style={{
            textAlign: "center",
            paddingTop: "60px",
            fontFamily: '"Cal Sans", Arial',
            fontSize: "80px",
            marginBottom: "30px",
            cursor: "default",
          }}
        >
          Cards for anything!
        </h1>
        <p
          style={{
            textAlign: "center",
            fontSize: "22px",
            fontFamily: '"Cal Sans", Arial',
            cursor: "default",
          }}
        >
          I create cards for Weddings, Birthdays , Partys and any event!
        </p>
      </div>
      <div className="buttom-white">
        <p
          style={{
            textAlign: "center",
            fontFamily: '"Cal Sans", Arial',
            paddingTop: "20px",
            fontSize: "35px",
            marginBottom: "80px",
          }}
        >
          My creations :
        </p>
        <div className="first-row" style={{ marginBottom: "80px" }}>
          <img className="show-img" src="/asdda.png" alt="image" />
          <img className="show-img" src="/BLUE.png" alt="image" />
          <img className="show-img" src="/LEEN3.png" alt="image" />
          <img className="show-img" src="/nief4.png" alt="image" />
        </div>
        <div className="second-row" style={{ marginBottom: "30px" }}>
          <img className="show-img" src="/spiderman2.png" alt="image" />
          <img className="show-img" src="/tote3.png" alt="image" />
          <img className="show-img" src="/twins.png" alt="image" />
          <img className="show-img" src="/wedding2.png" alt="image" />
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
