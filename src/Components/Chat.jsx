import React, { useState, useRef, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
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
import { sendMessages, getMessages } from "../services/chatService";
import { useUserContext } from "../context/UserProvider";

export default function Chat({ user }) {
  const { userId } = useParams();
  const { state } = useLocation();
  const { name, avatar } = state || {};
  
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const chatBoxRef = useRef(null);
  const { selectedUser } = useUserContext();
  
  // Fetch previous messages when component mounts
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        setLoading(true);
        const response = await getMessages(selectedUser.id_usuarios, user.contacto);
        if (response.data && response.data.status === 'success') {
          setMessages(response.data.messages.map(msg => ({
            text: msg.texto,
            sender: msg.emisor === user?.id ? "user" : "bot",
            timestamp: msg.timestamp
          })));
        }
      } catch (error) {
        console.error("Error fetching messages:", error);
      } finally {
        setLoading(false);
      }
    };

    if (user?.id && userId) {
      fetchMessages();
    }
  }, [user?.id, userId]);

  // Handle sending new messages
  const sendMessage = async () => {
    if (inputValue.trim() === "") return;
    
    // Add message to local state first for immediate feedback
    const newMessage = { 
      text: inputValue, 
      sender: "user",
      timestamp: new Date().toISOString()
    };
    setMessages([...messages, newMessage]);
    
    const messageText = inputValue;
    setInputValue(""); // Clear input field
    
    try {
      // Send message to the server
      const response = await sendMessages(selectedUser.id_usuarios, user.contacto, messageText);
      
      if (!response.data || response.data.status !== 'success') {
        console.error("Failed to send message:", response);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      // You could add error handling UI here
    }
  };

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      <div className="top-0 bg-black h-screen m-0 rounded-b-lg flex flex-col">
        <div className="h-15 bg-[#1A168C] w-full flex items-center rounded-t-lg px-4">
          <Avatar src={avatar || user?.avatar} />
          <p className="text-white ml-3 font-semibold">{user?.contacto}</p>
        </div>
        <div ref={chatBoxRef} className="flex-grow overflow-y-auto p-4 space-y-2">
          {loading ? (
            <div className="text-center text-gray-400">Loading messages...</div>
          ) : messages.length === 0 ? (
            <div className="text-center text-gray-400">No messages yet. Start a conversation!</div>
          ) : (
            messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 max-w-xs text-white rounded-lg ${
                  msg.sender === "user" ? "bg-[#b30c7e] ml-auto" : "bg-[#151320]"
                }`}
              >
                {msg.text}
              </div>
            ))
          )}
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
            disabled={loading}
          />
          <Link
            onClick={sendMessage}
            aria-current="page"
            href="#"
            className={`hover:text-[#2EF2BB] ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            <PaperAirplaneIcon className="size-6" />
          </Link>
        </div>
      </div>
    </>
  );
}