import "../CssFiles/MailUs.css";
import { toast } from "react-toastify";
import React from "react";
import { useSelectedId } from "./ToDo";

function MailUs() {
      const setSelectedId = useSelectedId();
  const emailEnv = import.meta.env.VITE_EMAIL_LOGIN;
  const sendBody = () => {
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "jawajawa821@gmail.com",
      Password: emailEnv,
      To: "jawajawahar1213@gmail.com",
      From: document.getElementById("email").value,
      Subject: "Need Attention",
      Body:
        "Name: " +
        document.getElementById("name").value +
        "<br> Email: " +
        document.getElementById("email").value +
        "<br> Mobile Number: " +
        document.getElementById("mble").value +
        "<br> Query: " +
        document.getElementById("query").value,
    }).then(() => {
      toast.success("Mail Send Successfully", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    });
  };
  return (
    <div className="mail">
      <h1 className="tellUs">Tell Us</h1>
      <div className="wrapperMail">
        <div className="insideWrapperMail">
          <input
            type="text"
            placeholder="Name"
            id="name"
            autoComplete="off"
          ></input>
        </div>
        <div className="insideWrapperMail">
          <input
            type="text"
            placeholder="E-mail"
            id="email"
            autoComplete="off"
          ></input>
        </div>
        <div className="insideWrapperMail">
          <input type="text" placeholder="Mobile Number" id="mble"></input>
        </div>
      </div>
      <div className="textAreaCover">
        <textarea
          className="textArea"
          rows="4"
          placeholder="What's on your mind"
          id="query"
        ></textarea>
        <div className="sendButtonCover">
          <button className="sendButton" onClick={() => setSelectedId(3)}>
            ⬅ Back to feedback
          </button>
          <button className="sendButton" onClick={sendBody}>
            Be in touch with us
          </button>
        </div>
      </div>
    </div>
  );
}

export default MailUs;
