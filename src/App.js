import "./styles.css";
import { useState } from "react";
import happy from "./happy.svg";
import unhappy from "./unhappy.svg";

let dateInput = "";
let luckyNo = 0;
//var stores img div;
const happyImgDiv = (
  <img alt="happyImage" src={happy} width="100%" height="200px" />
);
const unhappyImgDiv = (
  <img alt="unhappyImage" src={unhappy} width="100%" height="200px" />
);

export default function App() {
  //state to display privacy notice
  const [displayAlert, setDisplayAlert] = useState("flex");
  //state for result text and image
  const [displayResult, setDisplayResult] = useState(["", ""]);

  const checkBtnHandler = (e) => {
    //to stop refreshing page on submit form
    e.preventDefault();
    //to convert the date into small strings
    const dateArray = dateInput.split("-");
    let sum = 0;
    //to access each string
    dateArray.map((string) => {
      //to access each number in string and add into sum
      for (let i = 0; i < string.length; i++) {
        sum = sum + Number(string[i]);
      }
    });
    //check if sum divisible by lucky no.
    if (sum % Number(luckyNo) === 0) {
      setDisplayResult(["Hurray!!You are a lucky person!", happyImgDiv]);
    } else {
      setDisplayResult([
        "Oops!!Your birthday is not a lucky number!",
        unhappyImgDiv
      ]);
    }
  };

  // function checkBtnHandler(e) {
  //   //to stop refreshing page on submit form
  //   e.preventDefault();
  //   //to convert the date into small strings
  //   const dateArray = dateInput.split("-");
  //   let sum = 0;
  //   //to access each string
  //   dateArray.map((string) => {
  //     //to access each number in string and add into sum
  //     for (let i = 0; i < string.length; i++) {
  //       sum = sum + Number(string[i]);
  //     }
  //   });
  //   //check if sum divisible by lucky no.
  //   if (sum % Number(luckyNo) === 0) {
  //     setDisplayResult(["Hurray!!You are a lucky person!", happyImgDiv]);
  //   } else {
  //     setDisplayResult([
  //       "Oops!!Your birthday is not a lucky number!",
  //       unhappyImgDiv
  //     ]);
  //   }
  // }

  return (
    <div className="App">
      {/* header section */}
      <div
        className="parallax"
        style={{
          minHeight: "100vh",
          backgroundAttachment: "fixed",
          backgroundImage:
            "url(https://images.pexels.com/photos/1303099/pexels-photo-1303099.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}
      >
        <div className="titleOfPage">
          <h1>Is Your Birthday Lucky?</h1>
          <a href="#mainSection">Checkout Now 👇</a>
        </div>
      </div>

      {/* body part of the page */}
      <section id="mainSection" className="section">
        {/* alertbox for privacy notice */}
        <div id="alertBox" style={{ display: `${displayAlert}` }}>
          <div className="notice">
            <strong>Privacy Notice!</strong> We are not storing your data.
          </div>

          <div
            onClick={() => {
              setDisplayAlert("none");
            }}
            style={{
              paddingLeft: "1rem",
              cursor: "pointer",
              fontSize: "0.5rem"
            }}
          >
            <span role="img" aria-labelledby="crossIcon">
              &#10060;
            </span>
          </div>
        </div>

        {/* form section for inputs */}
        <div className="formSection">
          <div className="formHeading">
            Enter your birthdate and lucky number...
          </div>
          <form onSubmit={checkBtnHandler}>
            <label className="label" htmlFor="datePicker">
              Select your birth date:
            </label>
            <input
              id="datePicker"
              onChange={(e) => {
                dateInput = e.target.value;
              }}
              type="date"
              required
            />
            <label className="label" htmlFor="luckyNo">
              Enter your lucky number:
            </label>
            <input
              id="luckyNo"
              min="1"
              step="1"
              required
              onChange={(e) => {
                luckyNo = e.target.value;
              }}
              type="number"
            />
            <button type="submit">Check</button>
          </form>
        </div>

        {/* output result section */}
        <div className="output">
          <div className="label">{displayResult[0]}</div>
          {displayResult[1]}
        </div>

        {/* footer section */}
        <footer>
          <div className="creator">
            Made with <strong>&lt;/&gt;</strong> by Omkar Ghate
          </div>
          <ul>
            <li className="footerLink">
              <a href="https://github.com/Omkar-Ghate" target="blank">
                <i className="fab fa-github" aria-hidden="true"></i>
              </a>
            </li>
            <li className="footerLink">
              <a href="https://twitter.com/OmkarGhate9" target="blank">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="footerLink">
              <a href="https://www.linkedin.com/in/omkarghate" target="blank">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li className="footerLink">
              <a href="https://omkarghate.netlify.app/" target="blank">
                <i className="fas fa-briefcase"></i>
              </a>
            </li>
          </ul>

          <div className="legacyText">
            <a
              href="#alertBox"
              onClick={() => {
                setDisplayAlert("flex");
              }}
              style={{ cursor: "pointer", color: "Black" }}
            >
              Privacy Policy
            </a>
          </div>
        </footer>
      </section>
    </div>
  );
}
