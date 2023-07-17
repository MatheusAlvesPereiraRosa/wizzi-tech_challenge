// import de arquivos de css
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { useState } from "react";

// import de componentes
import { Form } from "../components/Form/index.jsx";
import { StatusToast } from "../components/StatusToast/index.jsx";

function Home() {
  // status do envio
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  // função para mostrar toast
  const [show, setShow] = useState(false);

  // função para settar estado do componente pai
  function handleStatus(statusSubmit) {
    setStatus(statusSubmit);
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
