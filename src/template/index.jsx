// import logo from "../logo.svg";
// import "./index.css";
import { Form } from "../components/Form/index.jsx";
// import { Header } from "../components/Header";

function Home() {
  return (
    <>
      <div className="filter opacity-100 position-absolute bottom-0 start-0 w-100 h-100" />
      <div className="position-relative fluid-container h-100 position-relative d-flex flex-column justify-content-center vh-100">
        <Form />
      </div>
    </>
  );
}

export default Home;
