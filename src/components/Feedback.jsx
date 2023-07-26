import React from "react";
import { toast } from "react-toastify";
import "../CssFiles/Feedback.css";
import { useSelectedId } from "./ToDo";

function Feedback() {
  const setSelectedId = useSelectedId();
  const handleChange = () => {
    var input = document.getElementById("inputComment");
    var image = document.getElementById("eatingGrass");
    if (input.value.length === 0) {
      image.style.zIndex = 1;
    } else {
      image.style.zIndex = -1;
    }
  };
  const submitted = () => {
    var input = document.getElementById("inputComment");
    var image = document.getElementById("eatingGrass");
    if (input.value.length !== 0) {
      (input.value = ""), (image.style.zIndex = 1);
      toast.success(
        <div className="yummyCover">
          <p>Yummy</p>
          <img className="yummy" src="public/yummy.png"></img>
        </div>,
        {
          position: "bottom-left",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        }
      );
    } else {
      toast.error(
        <div className="yummyCover">
          <p>Feed Me Something </p>
          <img className="yummy" src="public/feedMe.png"></img>
        </div>,
        {
          position: "bottom-left",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        }
      );
    }
  };

  return (
    <div className="commentBox">
      <img
        className="eatingGrass"
        id="eatingGrass"
        src="public/eatingGrass.webp"
      ></img>
      <textarea
        className="inputComment"
        id="inputComment"
        type="text"
        placeholder="LEAVE YOUR COMMENTS🐮..."
        onChange={handleChange}
      ></textarea>
      <div className="buttonCover">
        <button className="feedButton" onClick={submitted}>
          Feed it!
        </button>
        <button className="feedButton" onClick={() => setSelectedId(4)}>
          Queries
        </button>
      </div>
    </div>
  );
}

export default Feedback;
