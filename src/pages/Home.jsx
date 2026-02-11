import { useEffect, useState } from "react";
import axios from 'axios';
import Header from "../components/cards/Header";
import RenderNews from "../components/cards/RenderNews";

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
        <div className="flex flex-col justify-center items-center h-[80vh]">
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