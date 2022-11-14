import { useEffect, useState } from "react";
import MessageForm from "./views/MessageForm";
import Messages from "./views/Messages";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import {getAllMessages} from "./api/GetAllMessages"

function App() {
  const [messages, setMessages] = useState<Array<{id: string, title:string, body: string, imgUrl: string}>>([]);
  useEffect(() => {
    const fetchMessage = async () => {
      setMessages(await getAllMessages())
    }
    fetchMessage()
  }, [])

  const addMessage = (message: {
    id: string;
    title: string;
    body: string;
    imgUrl: string;
  } ) => {
    setMessages((state) => [...state, message]);
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Messages messages={messages} />} />
          <Route path="/addMessage" element={<><MessageForm addMessage={addMessage} /><Messages messages={messages} /></>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
