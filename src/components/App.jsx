import "../CssFiles/App.css";
import HomePage from "./homePage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import jwt_decode from "jwt-decode";
import { useEffect, useState, createContext } from "react";
import { toast } from "react-toastify";
import LeftDrawer from "./LeftDrawer";
import Feedback from "./Feedback";
import MailUs from "./MailUs";

export const useContextAPI = createContext("");
const UseContext = useContextAPI.Provider;

function App() {
  const [user, setUser] = useState({});
  const googleEnv = import.meta.env.VITE_GOOGLE_LOGIN;
  useEffect(() => {
    google.accounts.id.initialize({
      client_id: googleEnv,
      callback: handleLoginSuccess,
    });
    google.accounts.id.renderButton(document.getElementById("googleLogin"), {
      theme: "filled_black",
      shape: "square",
      type: "standard",
      size: "large",
    });
    google.accounts.id.prompt();
  }, [!user]);
  const handleLoginSuccess = (credentialResponse) => {
    var decoded = jwt_decode(credentialResponse.credential);
    setUser(decoded);
    console.log(decoded);
    document.getElementById("googleLogin").hidden = true;
    let name = decoded.name;
    toast.success("Welcome " + name, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <UseContext
      value={{
        user,
        setUser,
      }}
    >
      <BrowserRouter>
        <ToastContainer
          progressClassName="toastProgress"
          bodyClassName="toastBody"
        />

        <div className="horizontalLine">
          <div className="wrapper">
            <Link to="/" style={{ textDecoration: "none" }}>
              <div style={{ display: "flex", cursor: "pointer" }}>
                <img
                  className="logoImage"
                  src="public/mattupannai.com.png"
                ></img>
                <header className="headerInPage">MaatuPannai.com</header>
              </div>
            </Link>
            <div className="googleLogin" id="googleLogin"></div>
            {Object.keys(user).length != 0 && <LeftDrawer />}
          </div>
        </div>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/feedback" element={<Feedback></Feedback>}></Route>
          <Route path="/mailus" element={<MailUs></MailUs>}></Route>
        </Routes>
      </BrowserRouter>
    </UseContext>
  );
}
export default App;
