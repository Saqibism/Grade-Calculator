import "../styles/Header.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [Quote, setQuote] = useState(" ");
  const [Author, setAuthor] = useState(" ");

  useEffect(() => {
    axios({
      method: "get",
      url: "https://type.fit/api/quotes"
    }).then(response => {
      let number = Math.floor(Math.random() * 100 + 1);
      setAuthor(response.data[number]["author"]);
      setQuote(response.data[number]["text"]);
    });
  }, [setAuthor]);

  return (
    <div class="Top">
      <div>
        <header id="header"> You Are More Than a Number</header>
        <br></br>
        <div id="quote">
          <h5>
            {Quote}~<br></br>
            <br></br>
            <h6>{Author}</h6>
          </h5>
        </div>
        <div id="description">
          Directions: This tool is a class grade calcualtor that can be used to
          calculate your final grade in the course. Enter the assignment name,
          the grade you obtained, and the weight of the assignment to get the
          estimate. Please make sure the weight totals to 1 and the grade/weight
          values are integers.
        </div>
      </div>
    </div>
  );
};

export default Header;
