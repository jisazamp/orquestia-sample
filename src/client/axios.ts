import axios from "axios";

const httpClient = axios.create({ baseURL: "http://localhost:5678/webhook/" });

export { httpClient };
