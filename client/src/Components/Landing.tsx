import React from "react";
import Header from "./Header";
import Book from "../../fotos/Kids reading-amico.svg";
import user from "../../fotos/user-regular.svg";
import sold from "../../fotos/hand-holding-hand-solid.svg";
import book from "../../fotos/book-open-solid.svg";

function Landing() {
  return (
    <>
      <Header />
      <div
        className="landing-1"
        style={{
          // backgroundColor: "#8C8372",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          height: "70vh",
          alignItems: "center",
          color: "#CFCFCF",
        }}
      >
        <div style={{ width: "40vw" }}>
          <h1
            style={{
              fontWeight: "900",
              fontSize: "40px",
              backgroundColor: "#2B324A",
              padding: "2vw",
              // width: "40rem",
              borderRadius: "20px",
            }}
          >
            იყიდე, გაყიდე და გაცვალე <br />
            მეორადიწიგნები ერთ სივრცეში
            <p style={{ fontSize: "20px", fontWeight: "100" }}>
              ადვილად მოძებნე და შეიძინე წიგნები სხვა კითხვის მოყვარულებისგან
            </p>
            <a href="/Body" className="button-86" role="button">
              LESGO{" "}
            </a>
          </h1>
        </div>
        <div>
          <img
            className="landing-image"
            src={Book}
            alt="wingebis gacvlis foto"
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15rem",
          color: "#26130D",
        }}
      >
        {/* <div className="social-proofing">
          <img style={{ width: "60px" }} src={user} alt="" />
          <h2>
            700 <br /> მომხმარებელი{" "}
          </h2>
        </div>
        <div className="social-proofing">
          <img style={{ width: "60px" }} src={book} alt="" />
          <h2>
            {" "}
            999 <br /> განცხადება
          </h2>
        </div>
        <div className="social-proofing">
          <img style={{ width: "60px" }} src={sold} alt="" />
          <h2>
            800 <br /> გაყიდული წიგნი{" "}
          </h2>
        </div> */}
      </div>
    </>
  );
}

export default Landing;
