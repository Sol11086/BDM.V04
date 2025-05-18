import httpClient from './httpClient';

const sendMessages = (payload)=>{
  return httpClient.post('/websocket/sendMessage', payload);
}

const getMessages = (payload)=>{
  return httpClient.post('/websocket/getConversation', payload);
}

export default {
  sendMessages,
  getMessages
};