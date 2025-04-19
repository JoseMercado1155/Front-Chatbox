import { useRef } from "react";

const ChatForm = ({ chatHistory = [], setChatHistory, generateBotResponse }) => {
    const inputRef = useRef();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const userMessage = inputRef.current.value.trim();
        if (!userMessage) return;
        
        inputRef.current.value = "";
        
        // 1. Asegurar que chatHistory sea un array
        const updatedHistory = Array.isArray(chatHistory) 
            ? [...chatHistory, { role: "user", text: userMessage }]
            : [{ role: "user", text: userMessage }];
        
        setChatHistory(updatedHistory);

        setTimeout(() => {
            setChatHistory(prev => [...prev, { role: "model", text: "Pensando..." }]);
        }, 600);

        // 2. Pasar el array directamente
        generateBotResponse([...chatHistory, { role: "user", text: userMessage }]);
    };

    return (
        <form onSubmit={handleFormSubmit} className="chat-form">
            <input
                ref={inputRef}
                type="text"
                placeholder="Mensaje..."
                className="message-input"
                required
            />
            <button type="submit" className="material-symbols-rounded">
                arrow_upward
            </button>
        </form>
    );
};

export default ChatForm;