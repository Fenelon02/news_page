const NewsBox = ({article}) => {
    return (
        <div key={article.id} className="border border-blue-500 shadow-2xl shadow-neutral-300 m-6 rounded-2xl">
            <img src={article.image} alt={article.tittle} className="h-140 w-full object-cover rounded-t-2xl"/>
            <div className="p-4 text-center">
            <h2 className="text-3xl text-blue-700 font-bold">{article.title}</h2>
            <p className="text-lg">{article.description}</p>
            </div>
        </div>
    )
}

export default NewsBox