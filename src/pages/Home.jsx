import { useEffect, useState } from "react";
import axios from 'axios';
import Header from "../components/layout/header/Header";
import RenderNews from "../components/cards/notices/RenderNews";

export default function Home() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getNews("pt", "br", "general")
  }, [])

  async function getNews(lang, country, category) {
    setLoading(true);
    try {
      const response = await axios.get(
        `/api/news?lang=${lang}&country=${country}&category=${category}` 
      );

      setNews(response.data);
    } catch (error) {
      setNews([]); 
    }
    setLoading(false);
  }

  if(loading){
    return (
      <div>
        <Header onSearch={getNews}/>
        <div className="flex flex-col justify-center items-center h-screen pt-[5vh] lg:pt-[9vh]">
          <h2 className="text-5xl text-blue-700 flex flex-center items-center">Carregando as melhores notícias para você!</h2>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Header onSearch={getNews}/>
      <RenderNews news={news} />
    </div>
  );
}