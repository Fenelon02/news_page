const RenderNews = ({ news }) => {
  if (news.length > 0) {
    return(
        <div className="flex flex-col items-center justify-center w-full">
          {/* the main box */}
          <div className="rounded-3xl border border-blue-700 mx-4 shadow-lg w-8/10 mb-10">
            <img src={news[0].image} alt={news[0].title} className="rounded-t-3xl w-full h-140 object-cover"/>
            <div className="px-2">
              <h2 className="text-center text-2xl mt-2 font-semibold text-blue-700 ">{news[0].title}</h2>
              <p className="text-center m-2">{news[0].description}</p>
            </div>
          </div>

          {/* the grid of notices */}
          <div className="grid grid-flow-col grid-rows-4 gap-4 mx-4 w-8/10 mb-10">
            
            <div className="row-span-4 rounded-3xl border border-blue-700 mx-4 shadow-lg ">
              <img src={news[1].image} alt={news[1].title} className="rounded-t-3xl w-full object-cover"/>
              <div className="">
                <h2 className="text-center text-2xl mt-2 font-semibold text-blue-700 ">{news[1].title}</h2>
                <p className="text-center m-2">{news[1].description}</p>
              </div>
            </div>

            <div class="col-span-2 flex rounded-3xl border border-blue-700 mx-4 shadow-lg row-span-2">
                <img src={news[2].image} alt={news[2].title} className="rounded-l-3xl w-100  object-cover"/>
                <div className="px-2 flex flex-col text-left justify-center">
                  <h2 className="text-2xl mt-2 font-semibold text-blue-700 ">{news[2].title}</h2>
                  <p>{news[2].description}</p>
                </div>
            </div>
            <div class="col-span-2 flex rounded-3xl border border-blue-700 mx-4 shadow-lg row-span-2">
                <img src={news[3].image} alt={news[3].title} className="rounded-l-3xl w-100  object-cover"/>
                <div className="px-2 flex flex-col text-left justify-center">
                  <h2 className="text-2xl mt-2 font-semibold text-blue-700 ">{news[3].title}</h2>
                  <p>{news[3].description}</p>
                </div>
            </div>
          </div>


        </div>
    )
  } else {
    return (
      <div className="flex flex-col items-center justify-center">
        <h2>sem noticias</h2>
      </div>
    );
  }
}

export default RenderNews