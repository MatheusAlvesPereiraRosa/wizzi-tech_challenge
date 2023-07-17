import Toast from "react-bootstrap/Toast";
import "./index.css";

export const StatusToast = ({ status, show, setShow }) => {
  return (
    <div className="position-absolute toast-top-end">
      {status && status.type === "Sucesso" ? (
        <Toast
          animation
          onClose={() => setShow(false)}
          show={show}
          delay={15000}
          autohide
        >
          <Toast.Header className="bg-success">
            <span className="me-auto fs-4">{status.type}</span>
          </Toast.Header>
          <Toast.Body className="bg-success-subtle">
            {status.message}
          </Toast.Body>
        </Toast>
      ) : (
        <Toast
          animation
          onClose={() => setShow(false)}
          show={show}
          delay={15000}
          autohide
        >
          <Toast.Header className="bg-danger">
            <span className="me-auto fs-4">{status.type}</span>
          </Toast.Header>
          <Toast.Body className="bg-danger-subtle">{status.message}</Toast.Body>
        </Toast>
      )}
    </div>
  );
};
