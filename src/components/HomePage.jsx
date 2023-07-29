import React from "react";
import "../CssFiles/HomePage.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import EastSharpIcon from "@mui/icons-material/EastSharp";
import HomePage2 from "./HomePage2";
import { toast } from "react-toastify";

function HomePage() {
  const navigate = useNavigate();
  var body = document.querySelector("body");
  body.style.backgroundImage = "url('background2.jpg')";
  body.style.backgroundSize = "100% 60%";

  const copyText = () => {
    const textToCopy = "8870334424";
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        toast.success("Phone number copied", {
          position: "bottom-left",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      })
      .catch((error) => {
        console.error("Unable to copy text:", error);
      });
  };

  window.addEventListener("scroll", function () {
    let navigation = document.querySelector(".NavigationBar");
    let fixedBarHeight = document.querySelector(".horizontalLine").offsetHeight;

    if (window.scrollY > fixedBarHeight) {
      navigation.classList.add("sticky");
    } else {
      navigation.classList.remove("sticky");
    }
  });

  return (
    <div className="wholePage">
      <div className="NavigationBar">
        <img
          className="logo"
          onClick={() => navigate("/")}
          src="public\mattupannaihome.png"
        ></img>
        <div onClick={() => navigate("/")}>Home</div>
        <div>Service</div>
        <div>Blog</div>
        <div>Gallery</div>
        <div>About us</div>
        <Button
          id="myText"
          variant="contained"
          value="8870334424"
          onClick={copyText}
          sx={{
            borderRadius: "5px",
            padding: "1%",
            height: "3vh",
            mt: "3%",
            bgcolor: "rgb(60, 34, 34)",
            ":hover": {
              bgcolor: "rgb(249, 225, 187)",
              color: "rgb(60, 34, 34)",
            },
          }}
        >
          +91 8870334424
        </Button>
      </div>
      <div className="smallText">
        <h5>PURE AND ORGANIC NATURAL PRODUCTS</h5>
      </div>
      <div className="largeText">
        <h1> We Are The Best</h1>
        <h2>
          {" "}
          Natural <span className="dairy">Dairy</span>
        </h2>
      </div>
      <Button
        variant="text"
        onClick={() => navigate("/about")}
        sx={{
          bgcolor: "rgb(245, 200, 146)",
          color: "black",
          padding: "1%",
          position: "inherit",
          fontWeight: "bold",
          fontFamily: "Oregon",
          textTransform: "full-size-kana",
          borderRadius: "10px",
          ml: "5%",
          transition: "all .4s ease 0s",
          ":hover": {
            bgcolor: "rgb(60, 34, 34)",
            color: "rgb(249, 225, 187)",
          },
        }}
      >
        Explore More <EastSharpIcon sx={{ ml: "3px" }}></EastSharpIcon>
      </Button>
      <div className="cardContainer">
        <div className="card">
          <img className="cardImage" src="public/Curd.png"></img>
          <div className="textCard">Fresh Curd</div>
        </div>
        <div className="card">
          <img className="cardImage" src="public/Milk.png"></img>
          <div className="textCard">Pure Milk</div>
        </div>
        <div className="card">
          <img className="cardImage" src="public/Butter.png"></img>
          <div className="textCard">Smooth Butter</div>
        </div>
        <div className="card">
          <img className="cardImage" src="public/Ghee.png"></img>
          <div className="textCard">Home-made Ghee</div>
        </div>
        <div className="card">
          <img className="cardImage" src="public/Panner.png"></img>
          <div className="textCard">Delicious Paneer</div>
        </div>
      </div>
      <HomePage2></HomePage2>
    </div>
  );
}

export default HomePage;
