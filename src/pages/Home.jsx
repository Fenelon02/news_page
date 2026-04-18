import { useEffect, useState } from "react";
import axios from 'axios';
import Header from "../components/layout/header/Header";
import RenderNews from "../components/cards/notices/RenderNews";
import Footer from "../components/layout/footer/Footer";

export default function Home() {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getNews("pt", "br", "general")
  }, [])

  async function getNews(lang, country, category) {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `/api/news?lang=${lang}&country=${country}&category=${category}` 
      );

      setNews(response.data);
    } catch (error) {
      setNews([]); 
      setError(error);
    }
    setLoading(false);
  }

  return (
    <div>
      <Header onSearch={getNews}/>
      {loading && (
        <div className="flex flex-col justify-center items-center h-screen pt-[5vh] lg:pt-[9vh]">
          <h2 className="lg:text-6xl md:text-5xl text-4xl text-blue-700 text-center font-bold">Carregando as melhores notícias para você!</h2>
        </div>
      )}

      {error && (
        <div className="flex flex-col justify-center items-center h-screen pt-[5vh] lg:pt-[9vh]">
          <h2 className="lg:text-6xl md:text-5xl text-4xl text-blue-700 text-center font-bold">Erro ao carregar as notícias!</h2>
        </div>
      )}

      {news.length > 0 && <RenderNews news={news} />}


      <Footer/>
    </div>
  );
}