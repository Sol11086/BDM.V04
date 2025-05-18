import chatApi from '../api/chatApi';

export const sendMessages = async (emisor, receptor, texto) =>{
  return chatApi.sendMessages({
    emisor: emisor,
    receptor: receptor,
    texto: texto
  })
};

export const getMessages = async (emisor, receptor) =>{
  return chatApi.getMessages({
    emisor: emisor,
    receptor: receptor
  })
};
