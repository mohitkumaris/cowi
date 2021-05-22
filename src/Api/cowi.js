import axios from "axios";

export default axios.create({
  baseURL:
    "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict",
  headers: {
    "Accept-Language": "hi_IN",
    "Access-Control-Allow-Origin": "http://localhost:3000",
    Accept: "*/*",
  },
});
