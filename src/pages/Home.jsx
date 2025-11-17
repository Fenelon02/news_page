import { useState } from "react";
import { useForm } from 'react-hook-form';
import handler from "../../api/news";


export default function Home() {
  const [lang, setLang] = useState("en");
  const [country, setCountry] = useState("us");
  const [news, setNews] = useState([]);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    setCountry(data.country)
    setLang(data.lang)
    getNews()
  };


  async function getNews() {
    try {
      const response = await handler(country, lang);
      setNews(response);
    } catch (error) {
      setNews([]); 
    }
  }

  function renderNews() {
    if (news.length > 0) {
      return news.map((notice) => (
        <div key={notice.id}>
          <img src={notice.img} alt="image" />
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
