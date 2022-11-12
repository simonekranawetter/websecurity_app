import { useState } from "react";
import MessageForm from "./views/MessageForm";
import Messages from "./views/Messages";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import {getAllMessages} from "./api/GetAllMessages"

function App() {
  const [messages, setMessages] = useState([
    {id: '111',
    title: 'Fubaaar',
    body: 'I am the night',
    imgUrl: 'https://www.pngkey.com/png/full/17-179316_funny-png.png'
  },
 //getAllMessages(),
  ]);

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
