import { useEffect, useState } from "react";
import axios from 'axios';
import Header from "../components/cards/Header";
import { set } from "zod";

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
        <div className="flex flex-col justify-center items-center h-80">
          <h2 className="text-5xl text-blue-700">Carregando as melhores notícias para você!</h2>
        </div>
      </div>
    )
  }

  function renderNews() {
    if (news.length > 0) {
      return news.map((notice) => (
        <div key={notice.url}>
          <img src={notice.image} alt={notice.title || "image"}/>
          <h2 className="text-3xl text-blue-500">{notice.title}</h2>
          <p>{notice.description}</p>
        </div>
      ));
    } else {
      return (
        <div>
          <h2>sem noticias</h2>
        </div>
      );
    }
  }

  return (
    <div>
      <Header onSearch={getNews}/>
      

      {renderNews()}
    </div>
  );
}