import NewsBox from "./NewsBox"

const RenderNews = ({ news }) => {
  if (news.length > 0) {
    return(
        <div className="m-8 pt-[5vh] lg:pt-[10vh]">
            <div className='lg:grid lg:grid-cols-2'>
              {news.map((article, index) => {
                  if(index % 3 == 0){ 
                    return (
                      <NewsBox 
                      article = {article} 
                      key={article.id} 
                      boxClassName={"lg:col-span-2"} />)
                    } else {
                      return (
                        <NewsBox 
                        article = {article} 
                        key={article.id} 
                        boxClassName={"lg:col-span-1"} />)
                    }
              })}
            </div>
        </div>
    )
  } else {
    return (
      <div className="flex flex-col items-center justify-center h-screen pt-[5vh] lg:pt-[9vh]">
        <h2 className="lg:text-6xl md:text-5xl text-4xl text-blue-700 text-center font-bold">Sem noticias no momento. <br/> Aguarde mais atualizações.</h2>
      </div>
    );
  }
}

export default RenderNews