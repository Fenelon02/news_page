import axios from "axios";

const ENVIROMENT = import.meta.env.ENVIROMENT;
let API_KEY;

if (ENVIROMENT == "Production") {
  API_KEY = import.meta.env.GNEWS_API_KEY  
} else {
  API_KEY = import.meta.env.VITE_GNEWS_API_KEY
}

export default async function handler(country, lang) { 
  try {
    const response = await axios.get(
      `https://gnews.io/api/v4/top-headlines?category=world&lang=${lang}&country=${country}&max=10&apikey=${API_KEY}`,
    );
    console.log("macaco")
    return response.data.articles
  } catch (error) {
    return error
  }
}