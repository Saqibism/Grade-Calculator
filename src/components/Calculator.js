import React, { useState } from "react";
import "../styles/Calculator.css";
import "bootstrap/dist/css/bootstrap.css";
import { string } from "prop-types";

const Calculator = () => {
  const [rowCount, setRowCount] = useState(3);
  const element = [];
  for (let i = 0; i < rowCount; i++) {
    element.push(
      <div className="classEntry">
        <label>Assignment: {i + 1}</label>
        <input className="input" type="text" placeholder="Name"></input>
        <input
          className="input Grade "
          type="input"
          placeholder="Grade"
        ></input>
        <input
          className="input Weight"
          type="input"
          placeholder="Weight"
        ></input>
      </div>
    );
  }

  const makeRow = () => {
    setRowCount(rowCount + 1);
  };

  const deleteRow = () => {
    setRowCount(rowCount - 1);
  };

  return (
    <div>
      <div id="Table">{element}</div>
      <div id="BtnConsole">
        <button class=" calculatorBtn btn btn-primary" onClick={calculate}>
          Calculate
        </button>
        <button class="calculatorBtn btn btn-primary" onClick={makeRow}>
          +
        </button>
        <button class="calculatorBtn btn btn-primary" onClick={deleteRow}>
          -
        </button>
      </div>
    </div>
  );
};

function calculate() {
  console.log("3");
  let table = document.getElementById("Table");
  let grades = table.getElementsByClassName("Grade");
  let weights = table.getElementsByClassName("Weight");
  let length = grades.length;
  let sum = 0;
  for (let i = 0; i < length; i++) {
    console.log(typeof grades[i].value);
    if (grades[i].value == "" || weights[i].value == "") {
      alert("insert all the correct values");
      return;
    }
    sum += grades[i].value * weights[i].value;
  }
  document.getElementById("avg").value = sum;
}

export default Calculator;
