import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MessageForm = ({ addMessage }: any) => {
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    imgUrl: "",
  });
  const navigate = useNavigate();
  const handleChange = (e: any) => {
    setFormData((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
  };

  const { getAccessTokenSilently } = useAuth0();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const regex = /[.]jpg|[.]png$/gm;
    if (!regex.test(formData.imgUrl)) {
      setError("Only jpg and png allowed!");
      return;
    }
    if (!formData.title || !formData.body || !formData.imgUrl) {
      setError("All fields are required!");
      return;
    }
    setError("");

    const message = {
      ...formData,
    };
    const messageToApi = JSON.stringify(message);

    //Moved the fetch request here to avoid saving token in localstorage
    const callSecureApi = async (messageToApi: string) => {
      try {
        const token = await getAccessTokenSilently({
          audience: process.env.REACT_APP_AUTH0_AUDIENCE,
        });
        console.log(token);
        const res = await fetch("https://localhost:7201/api/Messages", {
          method: "POST",
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
          body: messageToApi,
        });
        const result = await res.json();
        return result;
      } catch (error: any) {
        addMessage(error);
      }
    };
    addMessage(callSecureApi(messageToApi));
    e.target.reset();
    navigate("/");
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
      <button className="btn">Send Message</button>
    </form>
  );
};

export default withAuthenticationRequired(MessageForm);
