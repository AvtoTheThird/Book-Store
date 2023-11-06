import React from "react";
import { useState } from "react";
import Header from "./Header";

function CreateBook() {
  const [gayidva, setGayidva] = useState(false);
  console.log(gayidva);
  return (
    <>
      {" "}
      <Header />
      <div className="CreateBook">
        <input type="file" id="img" name="img" accept="image/*" />
        <div className="smth">
          <label htmlFor="name">წიგნის სახელი</label>
          <input type="text" placeholder="" name="name" id="name" />
        </div>
        <div className="smth">
          <label htmlFor="author">წიგნის ავტორი</label>
          <input type="text" placeholder="" name="author" id="author" />
        </div>
        <div className="smth">
          <p>გარიგების ტიპი:</p>
          <p>
            გაყიდვა
            <input
              style={{ margin: "0" }}
              type="checkbox"
              name=""
              id=""
              onChange={() => {
                setGayidva(!gayidva);
              }}
            />
          </p>
          <p>
            გაცვლა
            <input style={{ margin: "0" }} type="checkbox" name="" id="" />
          </p>
        </div>
        {gayidva ? (
          <div className="smth">
            <label htmlFor="fasi">ფასი</label>
            <input type="text" placeholder="" name="fasi" id="fasi" />
          </div>
        ) : null}
        <div className="smth">
          <label htmlFor="regioni">ადგილმდებარეობა</label>
          <input type="text" placeholder="" name="regioni" id="regioni" />
        </div>
        <div className="smth">
          <label htmlFor="yda">ყდის ტიპი</label>
          <input type="text" placeholder="" name="yda" id="yda" />
        </div>
        <div className="smth">
          <label htmlFor="agwera">აღწერა</label>
          <textarea name="" id="" cols={90} rows={10}>
            agwera
          </textarea>
        </div>{" "}
        <button>დასრულება</button>
      </div>
    </>
  );
}

export default CreateBook;
