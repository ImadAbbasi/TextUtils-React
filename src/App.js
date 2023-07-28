import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import TextForm from "./components/textform/TextForm";
// import About from "./components/about/About";
import Alert from "./components/alert/Alert";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#33373d";
      // document.body.style.color = "white";
      showAlert("Dark mode enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      // document.body.style.color = "black";
      showAlert("Light mode enabled", "success");
    }
  };

  return (
    <>
      {/* <Router> */}
      <Navbar
        title="Text Editor"
        aboutText="About us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes>
            <Route
              exact
              path="/"
              element={ */}
        <TextForm
          heading="Enter The Text To Analyze Below"
          mode={mode}
          showAlert={showAlert}
        />
        {/* } */}
        {/* /> */}
        {/* <Route exact path="/about/About.js" element={<About />} /> */}
        {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
