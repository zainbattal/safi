import React from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <>
      <p
        style={{
          fontFamily: "'Cal Sans',Arial",
          textAlign: "center",
          fontSize: "40px",
          marginBottom: "70px",
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
    </>
  );
}
