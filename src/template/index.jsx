// import logo from "../logo.svg";
import "./index.css";
import { useState } from "react";

import { Form } from "../components/Form/index.jsx";
// import { Header } from "../components/Header";

function Home() {
  // status do envio
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  // função para settar estado do componente pai
  function handleStatus(statusSubmit) {
    setStatus(statusSubmit);
    console.log("Mudei o estado");
  }

  const toastButton = document.querySelector("#submit");
  const toastContent = document.querySelector(".toast");

  if (toastButton) {
    toastButton.addEventListener("click", function () {
      const toast = new bootstrap.Toast(toastContent);
      toast.show();
    });
  }

  return (
    <main className="position-relative vh-100">
      <div className="position-absolute top-50 start-50 translate-middle form-container">
        <Form handleStatus={handleStatus} />
      </div>
      <div
        className="toast align-items-center position-absolute top-0 end-0"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="d-flex">
          <div className="toast-body">{status.message}</div>
          <button
            type="button"
            className="btn-close me-2 m-auto"
            data-bs-dismiss="toast"
            aria-label="Close"
          />
        </div>
      </div>
    </main>
  );
}

export default Home;
