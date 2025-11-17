import axios from "axios";

const API_KEY = import.meta.env.VITE_GNEWS_API_KEY

export default async function handler(country, lang) { 
  try {
    const response = await axios.get(
      `https://gnews.io/api/v4/top-headlines?category=world&lang=${lang}&country=${country}&max=10&apikey=${API_KEY}`,
    );
    return response.data.articles
  } catch (error) {
    return error
  }
}