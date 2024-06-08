import Header from "./Header";
import { useLocation } from "react-router-dom";

function BookDetails() {
  const location = useLocation();
  // const id = location.state.id;
  const data = location.state.props;
  console.log(data);

  return (
    <div>
      <Header />
      <div className="BookDetailPage">
        <div>
          <img
            style={{ width: "30rem", padding: "1rem" }}
            src={data.image}
            alt=""
          />
        </div>
        <div style={{ paddingLeft: "5rem", padding: "1rem" }}>
          <h1>{data.name}</h1>
          <h2 style={{ paddingBottom: "3rem" }}>{data.author}</h2>
          <h3 style={{ paddingBottom: "1rem" }}>
            გარიგრბის ტიპი:{data.dealType}
          </h3>
          <h3 style={{ paddingBottom: "1rem" }}>ქალაქი: {data.location} </h3>

          <h3 style={{ paddingBottom: "1rem" }}>ფასი:{data.price}ლ </h3>
          <h3 style={{ paddingBottom: "1rem" }}>
            საკონტაქტო ინფორმაცია: {data.phone}
          </h3>
          <h3 style={{ paddingBottom: "1rem" }}>
            {" "}
            ყდის ტიპი: {data.coverType}
          </h3>
          <h3 style={{ paddingBottom: "1rem" }}>
            {" "}
            წიგნის ენა: {data.language}
          </h3>

          <h4>აგწერა:</h4>
          <p style={{ maxWidth: "40rem" }}>{data.description} </p>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
