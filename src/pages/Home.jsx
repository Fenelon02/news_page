import { useState } from "react";
import axios from "axios";
import handler from "../../api/news";

export default function Home() {
  const [lang, setLang] = useState("en");
  const [country, setCountry] = useState("us");
  const [news, setNews] = useState([]);

  async function getNews() {
    const data = await handler(country, lang); 
    if (data) { 
      setNews(data); 
    }
  }

  function renderNews(){
    if(news.length > 0){
      return( news.map((notice) => {
        <div key={notice.id}>
          <h2>{notice.title}</h2>
          <p>{notice.content}</p>
        </div>
      }))
    } else{
      return(
        <div>
          <h2>sem noticias</h2>
        </div>
      )
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
