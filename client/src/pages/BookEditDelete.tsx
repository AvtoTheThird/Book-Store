import { useNavigate } from "react-router-dom";
import tashIcons from "../../fotos/trash-can-regular.svg";
import Axios from "axios";

function Book(props: any) {
  const history = useNavigate();
  const goToDetails = () => {
    history("/BookDetails", { state: { props } });
  };

  function deleteBook() {
    Axios.delete(`http://localhost:4000/deleteBook/${props._id}`)
      .then((res) => {
        if (res.data == "ok") alert(` ${props.name} წაიშალა`);
      })
      .then();
    window.location.reload();
  }

  return (
    <div className="books">
      <div className="book">
        <div
          style={{
            backgroundColor: "#f1807e",
            width: "100%",
            borderRadius: "3px",
          }}
        >
          <img
            style={{
              width: "15px",
            }}
            onClick={deleteBook}
            src={tashIcons}
            alt=""
          />
        </div>
        <a onClick={() => goToDetails()}>
          <div>
            <p
              style={{
                position: "absolute",
                backgroundColor: "#11141D",
                borderRadius: "15px",
                padding: "5px",
              }}
            >
              {props.dealType}
            </p>
          </div>
          <img style={{ height: "20rem" }} src={props.image} alt="" />
          <h2>{props.name}</h2>
          <h3>{props.author}</h3>
          <h1>{props.price}ლ</h1>
        </a>
      </div>
    </div>
  );
}

export default Book;
