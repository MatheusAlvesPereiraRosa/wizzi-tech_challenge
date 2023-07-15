// import logo from "../logo.svg";
import "./index.css";
import { Form } from "../components/Form/index.jsx";
// import { Header } from "../components/Header";

function Home() {
  return (
    <main>
      <div className="position-absolute top-50 start-50 translate-middle form-container">
        <Form />
      </div>
    </main>
  );
}

export default Home;
