import axios from "axios";

const API_KEY = process.env.GNEWS_API_KEY;


export default async function handler(request, response) { 
  try {
    const { country, lang } = request.query;

    if (!API_KEY) {
      return response.status(500).json({ error: "API Key is not configured" });
    }

    const apiResponse = await axios.get(
      `https://gnews.io/api/v4/top-headlines?category=world&lang=${lang}&country=${country}&max=10&apikey=${API_KEY}`,
    );
    
    return response.status(200).json(apiResponse.data.articles);

  } catch (error) {
    console.error(error);
    return response.status(500).json({ error: "An error was detected wen search the news", details: error.message });
  }
}