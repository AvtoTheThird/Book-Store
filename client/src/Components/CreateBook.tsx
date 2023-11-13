import React, { useEffect } from "react";
import { useState } from "react";
import Header from "./Header";
import axios from "axios";
// import FileBase64 from "react-file-base64";
import imageCompression from "browser-image-compression";

function CreateBook() {
  async function convertToBase64(e: any) {
    const imageFile = e.target.files[0];

    const options = {
      maxSizeMB: 0.05,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };
    const compressedFile = await imageCompression(imageFile, options);

    var reader = new FileReader();
    reader.readAsDataURL(compressedFile);
    reader.onload = () => {
      console.log(reader.result);
      var x: any = reader.result;
      setImg(x);
    };

    reader.onerror = (error) => {
      console.log("err:", error);
    };
  }

  const [gayidva, setGayidva] = useState(false);
  const [gacvla, setGacvla] = useState(false);
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [dealType, setDealType] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [coverType, setCoverType] = useState("");
  const [language, setLanguage] = useState("");

  const [description, setDescription] = useState("");
  const [userID, setUserId] = useState("");
  var BookData = {
    owner: userID,
    image: img,
    name: name,
    author: author,
    dealType: dealType,
    price: price,
    location: location,
    coverType: coverType,
    language: language,
    description: description,
  };
  console.log(BookData);
  function sendData() {
    axios.post("http://localhost:4000/createBook", BookData);
  }
  // console.log(name);
  axios
    .get("http://localhost:4000/profile", {
      withCredentials: true,
    })
    .then((res) => {
      setUserId(res.data.id);
    });
  useEffect(() => {
    if (gayidva && !gacvla) {
      setDealType("იყიდება");
    } else if (!gayidva && gacvla) {
      setDealType("იცვლება");
    } else if (gayidva && gacvla) {
      setDealType("იყიდება ან იცვლება");
    } else {
      setDealType("error");
    }
  }, [gacvla, gayidva]);
  return (
    <>
      {" "}
      <Header />
      <div className="CreateBook">
        <input
          onChange={convertToBase64}
          type="file"
          id="img"
          name="img"
          accept="image/*"
        />
        {img == "" || img == null ? (
          ""
        ) : (
          <img src={img} style={{ width: "100px" }} />
        )}
        <div className="smth">
          <label htmlFor="name">წიგნის სახელი</label>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            placeholder=""
            name="name"
            id="name"
          />
        </div>
        <div className="smth">
          <label htmlFor="author">წიგნის ავტორი</label>
          <input
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
            type="text"
            placeholder=""
            name="author"
            id="author"
          />
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
            <input
              onChange={() => {
                setGacvla(!gacvla);
              }}
              style={{ margin: "0" }}
              type="checkbox"
              name=""
              id=""
            />
          </p>
        </div>
        {gayidva ? (
          <div className="smth">
            <label htmlFor="fasi">ფასი</label>
            <input
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              type="text"
              placeholder=""
              name="fasi"
              id="fasi"
            />
          </div>
        ) : (
          <div className="smth">
            <label htmlFor="fasi">ფასი</label>
            <input
              className="disabled-input"
              type="text"
              placeholder=""
              name="fasi"
              id="fasi"
            />
          </div>
        )}
        <div className="smth">
          <label htmlFor="regioni">ადგილმდებარეობა</label>
          <input
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            type="text"
            placeholder=""
            name="regioni"
            id="regioni"
          />
        </div>
        <div className="smth">
          <label htmlFor="yda">ყდის ტიპი</label>
          <input
            onChange={(e) => {
              setCoverType(e.target.value);
            }}
            type="text"
            placeholder=""
            name="yda"
            id="yda"
          />
        </div>
        <div className="smth">
          <label htmlFor="ena">წიგნის ენა</label>
          <input
            onChange={(e) => {
              setLanguage(e.target.value);
            }}
            type="text"
            placeholder=""
            name="yda"
            id="yda"
          />
        </div>
        <div className="smth">
          <label htmlFor="agwera">აღწერა</label>
          <textarea
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            name=""
            id=""
            cols={90}
            rows={10}
          >
            agwera
          </textarea>
        </div>{" "}
        <button onClick={sendData}>დასრულება</button>
      </div>
    </>
  );
}

export default CreateBook;
