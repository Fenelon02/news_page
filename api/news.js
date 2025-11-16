import axios from "axios";
const api_key = process.env.GNEWS_API_KEY;

export default async function handler(req, res) { 
  
  const { country, lang } = req.query; 
  if (!country || !lang || !api_key) {
    return res.status(400).json({ error: "Parâmetros faltando ou API Key não configurada" });
  }

  try {
    const response = await axios.get(
      `https://gnews.io/api/v4/top-headlines?category=world&lang=${lang}&country=${country}&max=10&apikey=${api_key}`,
    );
    return res.status(200).json(response.data.articles);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao buscar notícias" });
  }
}