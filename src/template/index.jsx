// import logo from "../logo.svg";
// import "./index.css";
import { Form } from "../components/Form/index.jsx";
// import { Header } from "../components/Header";

function Home() {
  return (
    <div className="bg-image position-relative vh-100">
      <div className="filter" />
      <div className="fluid-container vh-100 position-relative d-flex flex-column justify-content-center">
        <Form />
      </div>
    </div>
  );
}

export default Home;
