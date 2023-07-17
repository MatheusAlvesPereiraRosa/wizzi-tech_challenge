import "./index.css";

// import de pacote para especificar os tipos de props
import P from "prop-types";
import Toast from "react-bootstrap/Toast";

// component de "Toast" para avisar sobre o status de envio do form
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

StatusToast.defaultProps = {
  status: {
    type: "",
    message: "",
  },
};

StatusToast.propTypes = {
  status: P.shape({
    type: P.string.isRequired,
    message: P.string.isRequired,
  }),
  show: P.bool.isRequired,
  setShow: P.string.isRequired,
};
