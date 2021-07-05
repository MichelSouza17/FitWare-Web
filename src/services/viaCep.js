import axios from "axios";

export const api = axios.create({
  baseURL: "https://viacep.com.br/ws/",
});

export const buscarViaCep = (cep) => api.get(`${cep}/json`);
