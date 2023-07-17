import { useState } from "react";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";

export const Toast = () => {
  const [showA, setShowA] = useState(true);

  const toggleShowA = () => setShowA(!showA);

  return (
    <>
      <Button onClick={toggleShowA} className="mb-2">
        Toggle Toast <strong>with</strong> Animation
      </Button>
      <Toast show={showA} onClose={toggleShowA}>
        <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
      </Toast>
    </>
  );
};
