import { useEffect, useState } from "react";
import axios from 'axios';
import Header from "../components/cards/Header";

export default function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews("pt", "br", "general")
  }, [])

  async function getNews(lang, country, category) {
    try {
      const response = await axios.get(
        `/api/news?lang=${lang}&country=${country}&category=${category}` 
      );

      setNews(response.data);
    } catch (error) {
      setNews([]); 
    }
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