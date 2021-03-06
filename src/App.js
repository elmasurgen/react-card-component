import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Footer from "./components/Footer";
import DATA_LIST from "./Data_List/Data_List.js";

export default function App() {
  const CardComp = DATA_LIST.map((item, index) => (
    <Card
      imgURL={item.imgURL}
      title={item.title}
      secondTitle={item.secondTitle}
      key={index}
      id={index}
    />
  ));
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">{CardComp}</div>
      </div>
      <Footer />
    </div>
  );
}
