import axios from "axios";

const ENVIROMENT = import.meta.env.ENVIROMENT;
let API_KEY;

if (ENVIROMENT == "Production") {
  API_KEY = process.env.GNEWS_API_KEY  
} else {
  API_KEY = import.meta.env.VITE_GNEWS_API_KEY
}

export default async function handler(request, response) { 
  try {
    const { country, lang } = request.query;

    if (!API_KEY) {
      return response.status(500).json({ error: "API Key não configurada no servidor" });
    }

    const apiResponse = await axios.get(
      `https://gnews.io/api/v4/top-headlines?category=world&lang=${lang}&country=${country}&max=10&apikey=${API_KEY}`,
    );
    
    console.log("macaco");


    return response.status(200).json(apiResponse.data.articles);

  } catch (error) {
    return response.status(500).json({ error: "Falha ao buscar notícias", details: error.message });
  }
}