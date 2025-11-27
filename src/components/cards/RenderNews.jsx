import NewsBox from './NewsBox.jsx';

const RenderNews = ({ news }) => {
  if (news.length > 0) {
    return(
        <div className="m-8">
            <div className='md:grid md:grid-cols-2'>
              {news.map((article, index) => {
                  if(index % 3 == 0){ 
                    return (
                      <NewsBox 
                      article = {article} 
                      key={article.id} 
                      boxClassName={"col-span-2"} />)
                    } else {
                      return (
                        <NewsBox 
                        article = {article} 
                        key={article.id} 
                        boxClassName={"col-span-2 md:col-span-1"} />)
                    }
              })}
            </div>
        </div>
    )
  } else {
    return (
      <div className="flex flex-col items-center justify-center h-[80vh]">
        <h2 className="text-6xl text-blue-700">Sem noticias no momento.</h2>
      </div>
    );
  }
}

export default RenderNews