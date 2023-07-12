// import logo from "../logo.svg";
// import "./index.css";
import { useState } from "react";

import { Form } from "../components/Form/index.jsx";
// import { Header } from "../components/Header";

function Home() {
  const [form, setForm] = {
    appartureDate: "",
    deppartureDate: "",
    adults: 0,
    children: 0,
    passagerName: "",
    locationName: "",
  };

  return (
    <div className="bg-image position-relative vh-100">
      <div className="filter" />
      <div className="fluid-container vh-100 position-relative d-flex flex-column justify-content-center">
        <Form form={form}/>
      </div>
    </div>
  );
}

export default Home;
