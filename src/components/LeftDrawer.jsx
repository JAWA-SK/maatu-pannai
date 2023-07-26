import React, { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useContextAPI } from "./App";
import "../CssFiles/Drawer.css";
import { toast } from "react-toastify";

function LeftDrawer() {
  let arrayOfImages = [
    {
      value: "View profile",
    },
    {
      value: "Edit image",
    },
    {
      value: "Remove image",
    },
    {
      value: "Signout",
    },
  ];

  const inputRef = useRef(null);
  const { user, setUser } = React.useContext(useContextAPI);
  let anchor = "right";
  const [state, setState] = React.useState({
    right: false,
  });
  const [image, setImage] = useState("");

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleImageClick = () => {
    inputRef.current.click();
  };
  const handleImageChange = (event) => {
    const file = event.target.files;
    console.log(file);
    setImage(event.target.files[0]);
  };

  const handleSignOut = (text) => {
    if (text.value === "Signout") {
      setUser({});
      console.log("Logged out");
      document.getElementById("googleLogin").hidden = false;
      toast.success("Successfully Signed Out ", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else if (text.value === "Edit image") {
      handleImageClick();
    } else if (text.value === "Remove image") {
      setImage("");
    } else {
      alert("hello");
    }
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        bgcolor: "rgb(22, 20, 20) ",
        color: "wheat",
      }}
      role="presentation"
    >
      {" "}
      <div>
        <div className="profile">
          {image ? (
            <img
              className="profilePicture"
              src={URL.createObjectURL(image)}
              onClick={handleImageClick}
            ></img>
          ) : (
            <img
              className="profilePicture"
              onClick={handleImageClick}
              src={user.picture}
            ></img>
          )}
          <input
            type="file"
            ref={inputRef}
            onChange={handleImageChange}
            style={{ display: "none" }}
          ></input>
          <div className="spans">
            <span className="profileName">{user.given_name}</span>
            <span className="email">{user.email}</span>
          </div>
        </div>
        {arrayOfImages.map((text, index) => (
          <div key={index} disablePadding>
            <div className="options">
              <ExitToAppIcon sx={{ color: " white" }} />
              <button
                className="buttonOptions"
                onClick={() => handleSignOut(text)}
                disabled={
                  image==="" && text.value === "Remove image" ? true : false
                }
              >
                {image!==''|| text.value!=="Remove image"?
                text.value:<span className="whenNoImage">Remove image</span>}
              </button>
            </div>
          </div>
        ))}
      </div>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={anchor}>
        <button
          type="button"
          className="signOut"
          onClick={toggleDrawer(anchor, true)}
        >
          <img className="profileImage" src={user.picture} alt="Profile" />{" "}
          <p className="para">{user.given_name}</p>
        </button>
        <Drawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
        >
          {list(anchor)}
        </Drawer>
      </React.Fragment>
    </div>
  );
}

export default LeftDrawer;
