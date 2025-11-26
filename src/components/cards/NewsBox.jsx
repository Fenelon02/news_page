const NewsBox = ({article}) => {
    return (
        <div key={article.id} className="border border-blue-500 shadow-2xl shadow-neutral-300 m-6 rounded-2xl">
            <img src={article.image} alt={article.title} className="h-64 w-full object-cover rounded-t-2xl sm:w-full sm:h-140"/>
            <div className="p-4 text-center">
                <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-blue-700">{article.title}</h2>
                <p className="sm:text-lg sm:text-center text-justify">{article.description}</p>
                <a href={article.url} className="text-blue-700">Leia mais aqui</a>
            </div>
        </div>
    )
}

export default NewsBox