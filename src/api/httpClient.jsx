// src/api/httpClient.js
import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'http://localhost/proyecto-bdm/index.php', // Adjust to your PHP API URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default httpClient;
