import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { useState } from "react";

import { Form } from "../components/Form/index.jsx";
import { StatusToast } from "../components/StatusToast";

function Home() {
  // status do envio
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [show, setShow] = useState(false);

  // função para settar estado do componente pai
  function handleStatus(statusSubmit) {
    setStatus(statusSubmit);
    console.log("Mudei o estado");
  }

  return (
    <main className="position-relative vh-100">
      <div className="position-absolute top-50 start-50 translate-middle form-container">
        <Form handleStatus={handleStatus} setShow={setShow} />
      </div>
      <StatusToast status={status} show={show} setShow={setShow} />
    </main>
  );
}

export default Home;
