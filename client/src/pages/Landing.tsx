import Header from "../components/Header";
import Book from "../../fotos/Kids reading-amico.svg";

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
        <div
          style={{
            fontWeight: "bold",
            backgroundColor: "#2B324A",
            padding: "2vw",
            // width: "40rem",
            borderRadius: "20px",
          }}
        >
          <h1>
            იყიდე, გაყიდე და გაცვალე <br />
            მეორადიწიგნები ერთ სივრცეში
            <p style={{ fontSize: "20px", fontWeight: "100" }}>
              ადვილად მოძებნე და შეიძინე წიგნები სხვა კითხვის მოყვარულებისგან
            </p>
            <a href="/Body" className="button-86" role="button">
              Let's Go{" "}
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
    </>
  );
}

export default Landing;
