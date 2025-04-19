import { useState } from "react";
import ChatbotIcon from "./Componentes/ChatbotIcon";
import ChatForm from "./Componentes/ChatForm";
import ChatMessage from "./Componentes/ChatMessage";

const App = () => {

  const[chatHistory, setChatHistory] = useState([])

  const generateBotResponse = (history) => {
    console.log(history);
  }

  return (
    <div className="Container">
      <div className="chatbot-popup">
        {/* Chatbox header */}
        <div className="chat-header">
          <div className="header-info">
            <ChatbotIcon />
            <h2 className="logo-text">FeedBack - Uniautonoma</h2>
          </div>
          <button className="material-symbols-rounded">keyboard_arrow_down</button>
        </div>

        {/* Chatbox header */}

        <div className="chat-body">
          <div className="message bot-message">
            <ChatbotIcon />
            <p className="message-text">
              Hola 👋 <br /> ¿Cómo te puedo ayudar el día de hoy?
            </p>  
          </div>

          {chatHistory.map((chat, index) => (
            <ChatMessage key={index} chat={chat} />
          ))}
        </div>

        {/* Chatbox Footer */}
        <div className="chat-footer">
          <ChatForm setChatHistory={chatHistory} setChatHistory={setChatHistory} generateBotResponse={generateBotResponse}/>
        </div>
      </div>
    </div>
  )
};

export default App;
