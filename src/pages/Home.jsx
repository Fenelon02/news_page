import { useState } from "react";
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function Home() {
  const [news, setNews] = useState([]);
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      lang: "en",
      country: "us"
    }
  });

  const onSubmit = data => {
    getNews(data.lang, data.country);
  };

  async function getNews(lang, country) {
    try {
      const response = await axios.get(
        `/api/news?lang=${lang}&country=${country}` 
      );

      setNews(response.data);
    } catch (error) {
      console.error("Erro ao buscar notícias:", error);
      setNews([]); 
    }
  }

  function renderNews() {
    if (news.length > 0) {
      return news.map((notice) => (
        <div key={notice.url}>
          <img src={notice.image} alt={notice.title || "image"} />
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
      <h1>Search news</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <select {...register("lang", { required: true })}>
          <option value="en">en</option>
          <option value="pt">pt</option>
          <option value="es">es</option>
          <option value="fr">fr</option>
        </select>

        <select {...register("country", { required: true })}>
          <option value="us">EUA</option>
          <option value="br">Brazil</option>
          <option value="fr">France</option>
          <option value="es">Spain</option>
        </select>

        <button type="submit" className="bg-blue-700" >Search</button>
      </form>

      <hr />

      {renderNews()}
    </div>
  );
}