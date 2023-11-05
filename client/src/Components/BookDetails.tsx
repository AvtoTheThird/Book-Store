import React from "react";
import Header from "./Header";
import BookFoto from "../../fotos/71jLBXtWJWL._AC_UF1000,1000_QL80_.jpg";
function BookDetails() {
  return (
    <div>
      <Header />
      <div className="BookDetailPage">
        <div>
          <img
            style={{ width: "30rem", padding: "1rem" }}
            src={BookFoto}
            alt=""
          />
        </div>
        <div style={{ paddingLeft: "5rem", padding: "1rem" }}>
          <h1>Lord Of The Rings</h1>
          <h2 style={{ paddingBottom: "3rem" }}>J.R.R martin</h2>
          <h3 style={{ paddingBottom: "1rem" }}>garigebis tipi: gayidva</h3>
          <h3 style={{ paddingBottom: "1rem" }}>qalaqi: tbilisi </h3>

          <h3 style={{ paddingBottom: "1rem" }}>fasi:10L </h3>
          <h3 style={{ paddingBottom: "1rem" }}>
            sakontaqto informacia:555555555
          </h3>
          <h3 style={{ paddingBottom: "1rem" }}> wignis mdgomareoba: karqi</h3>
          <h3 style={{ paddingBottom: "1rem" }}> yda: magari</h3>
          <h3 style={{ paddingBottom: "1rem" }}> wignis ena: qartuli</h3>

          <h4>agwera:</h4>
          <p>karqi wingi ari </p>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
