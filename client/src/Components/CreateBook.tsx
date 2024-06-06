import React, { useEffect } from "react";
import { useState } from "react";
import Header from "./Header";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import imageCompression from "browser-image-compression";
import QuestFoto from "../../fotos/qeustion.png";
function CreateBook() {
  // compress foto
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

  interface BookData {
    owner: string;
    image: string;
    name: string;
    author: string;
    dealType: string;
    price: string;
    location: string;
    coverType: string;
    language: string;
    description: string;
  }

  // const [dealType, setDealType] = useState(dealTypeEnum.gayidva);
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
  const areFieldsEmpty = () => {
    // Check if any field is empty
    if (
      img === "" ||
      (dealType === "იყიდება" && price === "") ||
      (dealType === "იყიდება ან იცვლება" && price === "") ||
      name === "" ||
      author === "" ||
      dealType === "" ||
      location === "" ||
      coverType === "" ||
      language === ""
    ) {
      return true;
    }
    return false;
  };
  function sendData() {
    if (areFieldsEmpty()) {
      alert("შეავსეთ ყველა სავალდებულო ველი");
    } else {
      try {
        axios.post("http://localhost:4000/createBook", BookData);
        history("/Body");
      } catch (err: any) {
        if (err.response.status == 422) {
          alert("სერვერს არ მოეწონა ინფორმაცია, სცადეთ მოგვიანებით");
        }
      }
    }

    // }
  }
  const history = useNavigate();

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
      <Header />
      <form className="CreateBook">
        <div>
          {" "}
          {img == "" || img == null ? (
            <img src={QuestFoto} style={{ width: "30rem", padding: "1rem" }} />
          ) : (
            <img src={img} style={{ width: "30rem", padding: "1rem" }} />
          )}
        </div>
        <div className="Fields">
          <label>წიგნის ფოტო</label>
          <input
            required
            onChange={convertToBase64}
            type="file"
            id="img"
            name="img"
            accept="image/*"
          />
          {/* {img == "" || img == null ? (
            ""
          ) : (
            <img src={img} style={{ width: "100px" }} />
          )} */}
          <div className="smth">
            <label htmlFor="name">
              წიგნის სახელი <span>*</span>
            </label>
            <input
              required
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
            <label htmlFor="author">
              წიგნის ავტორი<span>*</span>
            </label>
            <input
              required
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
            <p>
              გარიგების ტიპი<span>*</span>:
            </p>
            <p>
              გაყიდვა
              <input
                required
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
                required
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
              <label htmlFor="fasi">
                ფასი<span>*</span>
              </label>
              <input
                required
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
                required
                className="disabled-input"
                type="text"
                placeholder=""
                name="fasi"
                id="fasi"
              />
            </div>
          )}
          <div className="smth">
            <label htmlFor="regioni">
              ადგილმდებარეობა<span>*</span>
            </label>
            <input
              required
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
            <label htmlFor="yda">
              ყდის ტიპი<span>*</span>
            </label>
            <input
              required
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
            <label htmlFor="ena">
              წიგნის ენა<span>*</span>
            </label>
            <input
              required
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
            >
              agwera
            </textarea>
          </div>{" "}
          <button onClick={sendData}>დასრულება</button>
        </div>
      </form>
    </>
  );
}

export default CreateBook;
