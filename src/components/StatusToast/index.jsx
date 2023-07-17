import Toast from "react-bootstrap/Toast";

export const StatusToast = ({ status, show, setShow }) => {
  return (
    <div className="position-absolute top-0 end-0">
      {status && status.type === "sucesso" ? (
        <Toast
          animation
          onClose={() => setShow(false)}
          show={show}
          delay={15000}
          autohide
        >
          <Toast.Header className="bg-success">
            <h3 className="me-auto">{status.type}</h3>
          </Toast.Header>
          <Toast.Body className="bg-sucess-subtle">{status.message}</Toast.Body>
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
            <h3 className="me-auto">{status.type}</h3>
          </Toast.Header>
          <Toast.Body className="bg-danger-subtle">{status.message}</Toast.Body>
        </Toast>
      )}
    </div>
  );
};
