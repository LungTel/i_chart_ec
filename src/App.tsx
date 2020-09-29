import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PiePlot from "./components/PiePlot";
import LinePlot from "./components/LinePlot";
import BarPlot from "./components/BarPlot";

function App() {
  return (
    <div className="App">
      <h1>泉平2020秋冬新商品お試しサポート提案会 簡易表</h1>
      <br />
      <PiePlot />
      <br />
      <br />
      <br />
      <LinePlot />
      <br />
      <br />
      <br />
      <BarPlot />
    </div>
  );
}

export default App;
