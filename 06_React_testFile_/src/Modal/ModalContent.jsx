import { useState } from "react";
import "./Modal.css";

export default function ModalContent({ onClose }) {
  const [link, setLink] = useState("");
  return (
    <div className="modal">
      <input onChange={(e) => setLink(e.target.value)} />
      <div className="buttonBox">
        <button onClick={onClose}>취소</button>
      </div>
    </div>
  );
}
