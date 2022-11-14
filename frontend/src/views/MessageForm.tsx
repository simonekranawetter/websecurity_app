import { withAuthenticationRequired } from "@auth0/auth0-react";
import { useState } from "react";
import { createMessage } from "../api/CreateMessage";

const MessageForm = ({ addMessage }: any) => {
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    imgUrl: "",
  });

  const handleChange = (e: any) => {
    setFormData((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!formData.title || !formData.body || !formData.imgUrl) {
      setError("All fields are required!");
      return;
    }
    setError("");

    const message = {
      ...formData,
    };
    const messageToApi = JSON.stringify(message)
    addMessage(createMessage(messageToApi));
    e.target.reset();
  };

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <div className="input-group">
        <label htmlFor="title">Message Title</label>
        <input name="title" type="text" id="title" onChange={handleChange} />
      </div>
      <div className="input-group">
        <label htmlFor="message">Your Message</label>
        <textarea name="body" id="message" onChange={handleChange}></textarea>
      </div>
      <div className="input-group">
        <label htmlFor="imgUrl">Image Url</label>
        <input name="imgUrl" type="text" id="imgUrl" onChange={handleChange} />
      </div>
      <p className="error-message">{error}</p>
      <button className="btn">
        Send Message
      </button>
    </form>
  );
};

export default withAuthenticationRequired(MessageForm);
