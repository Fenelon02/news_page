import NewsBox from './NewsBox.jsx';

const RenderNews = ({ news }) => {
  if (news.length > 0) {
    return(
        <div className="m-8">
            <div>
              {news.map((article, index) => (
                <NewsBox article = {article}/>
              ))}
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