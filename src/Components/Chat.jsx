import React, { useState, useRef, useEffect } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  Avatar,
  Input,
  Link,
  useDisclosure,
} from "@heroui/react";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

export default function App() {

    const [messages, setMessages] = useState([]); 
  const [inputValue, setInputValue] = useState(""); 
  const chatBoxRef = useRef(null); 

  const sendMessage = () => {
    if (inputValue.trim() === "") return; 

    setMessages([...messages, { text: inputValue, sender: "user" }]);
    setInputValue(""); 

    setTimeout(() => {
      setMessages((prev) => [...prev, { text: "¡Hola! ¿Cómo puedo ayudarte?", sender: "bot" }]);
    }, 1000);
  };

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <>
        <div className="top-0 bg-black h-screen m-0 rounded-b-lg flex flex-col">
      <div className="h-15 bg-[#1A168C] w-full flex items-center rounded-t-lg px-4">
        <Avatar
          className="transition-transform"
          color="secondary"
          name="Jason Hughes"
          src="src/assets/descarga (6).jpeg"
        />
        <p className="text-white ml-3 font-semibold"> Cons_478</p>
      </div>
      <div ref={chatBoxRef} className="flex-grow overflow-y-auto p-4 space-y-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 max-w-xs text-white rounded-lg ${
              msg.sender === "user" ? "bg-[#D771D9] ml-auto" : "bg-[#151320]"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-4 p-4 bg-[#151320] rounded-b-lg">
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[20rem] h-10 rounded-full",
            inputWrapper: "h-full font-normal text-[#444353] bg-[#151320] rounded-full",
          }}
          placeholder="Escribe un mensaje..."
          size="sm"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()} 
        />
        <Link
          onClick={sendMessage}
          aria-current="page" href="#" className=" hover:text-[#2EF2BB]"
        >
          <PaperAirplaneIcon className="size-6" />
        </Link>
      </div>
    </div>
    </>
  );
}