import { Link } from "react-router-dom";
const NotFoundPage = () =>{
    return(
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-6xl font-extrabold">Not found</h1>
            <Link to={"/"} className="bg-blue-600 rounded-lg px-4 py-2 text-amber-50 mt-2">
                <button className="font-semibold">Go back to the homepage</button>
            </Link>
        </div>
    )
}

export default NotFoundPage