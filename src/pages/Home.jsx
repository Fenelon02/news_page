import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [lang, setLang] = useState("en");
  const [country, setCountry] = useState("us");
  const [news, setNews] = useState([]);

  async function getNews() {
    try {
      const url = `/api/news?country=${country}&lang=${lang}`;
      const response = await axios.get(url);
      setNews(response.data);
    } catch (error) {
      setNews([]); 
    }
  }

  function renderNews() {
    if (news.length > 0) {
      return news.map((notice) => (
        <div key={notice.url}>
          <h2>{notice.title}</h2>
          <p>{notice.content}</p>
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
      <h1>Buscar Notícias</h1>


      <button onClick={getNews}>Buscar</button>

      <hr />

      {renderNews()}
    </div>
  );
}
