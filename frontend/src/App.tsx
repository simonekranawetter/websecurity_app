import { useState } from "react";
import MessageForm from "./views/MessageForm";
import Messages from "./views/Messages";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      title: "Hi mom!",
      body: "Look mom, I made it!",
      imgUrl:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6b1c5200-c965-433e-9505-d0a946d71ca2/d5nyupy-f6c4cefe-86d5-47a4-a022-dea220779b5c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi82YjFjNTIwMC1jOTY1LTQzM2UtOTUwNS1kMGE5NDZkNzFjYTIvZDVueXVweS1mNmM0Y2VmZS04NmQ1LTQ3YTQtYTAyMi1kZWEyMjA3NzliNWMucG5nIn1dXX0.ciENLGxfm-VTffvXj0d8_oBAI7AIgjW6trmhRXJHzbA",
    },
  ]);

  const addMessage = (message: {
    id: number;
    title: string;
    body: string;
    imgUrl: string;
  }) => {
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
