import React from "react";

export default function Footer() {
  return (
    <>
      <div
        style={{
          backgroundColor: "rgba(0, 0 , 0 , 50%)",
          paddingBottom: "6px",
          display: "flex",
          justifyContent: "space-around",
          marginTop: "80px",
        }}
      >
        <ul
          style={{
            fontFamily: '"Cal Sans", Arial',
            fontSize: "20px",
          }}
        >
          <li>Birthday cards</li>
          <li>Wedding cards</li>
          <li>Invitation cards</li>
          <li>Anything</li>
        </ul>
        <ul
          style={{
            fontFamily: '"Cal Sans", Arial',
            fontSize: "20px",
            color: "black",
          }}
        >
          <li>
            <a
              href="https://www.instagram.com/zain.cards?igsh=YmU0NXlkaTgwbnQz"
              target="_blank"
            >
              instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/share/1YycEDivJb/"
              target="_blank"
            >
              Facebook
            </a>
          </li>
        </ul>
        <ul
          style={{
            fontFamily: '"Cal Sans", Arial',
            fontSize: "20px",
          }}
        >
          <li>Zain Cards</li>
          <li>Syria</li>
          <li>Latakia</li>
        </ul>
      </div>
    </>
  );
}
