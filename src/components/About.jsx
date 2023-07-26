import React from "react";
import "../CssFiles/About.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify';
import ToDo from "./ToDo";

function About() {
  var body = document.querySelector("body");
  body.style.backgroundImage = "url('cow-grazing-pasture.jpg')";
  body.style.backgroundSize = "cover";
  const navigate = useNavigate();
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

  return (
    <div>
      <div className="AboutNavigationBar">
        <div onClick={()=>navigate("/")}>Home</div>
        <div>Service</div>
        <div>Blog</div>
        <div>Gallery</div>
        <div>Contact us</div>
        <Button
          id="myText"
          variant="contained"
          value="8870334424"
          onClick={copyText}
          sx={{
            borderRadius: "5px",
            padding: ".7%",
            height: "3vh",
            mt: ".5%",
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
      <ToDo></ToDo>
    </div>
  );
}

export default About;
