import { useState } from "react";

// eslint-disable-next-line react/prop-types
const InputText = ({addMessage}) => {
    const [message, setMessage] = useState("");
    const sendMessage = () => {
      if(!message.trim()) return;
      addMessage(message);
      setMessage("");
    }
  return (
    <div className="inputText_container">
      <textarea
        name="message"
        id="message"
        rows="6"
        placeholder="Input Message ..."
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      ></textarea>
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default InputText;