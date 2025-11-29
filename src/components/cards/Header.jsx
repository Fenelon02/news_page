import logo from "../../assets/logo.svg"
import HeaderForm from "./HeaderForm"
import TopicNavigation from "./TopicNavigation"
import { useEffect, useState } from "react";
import MDScreenForm from "./MDScreenForm";


const Header = ({onSearch}) => {
    const [category, setCategory] = useState("general");
    const [lang, setLang] = useState("pt");
    const [country, setCountry] = useState("br");

    useEffect(() => {
        onSearch(lang, country, category);
    }, [lang, country, category]);

    return(
        <div>
            <div className="grid grid-cols-3 bg-blue-700 relative">
               <div className="flex flex-row">
                   <img src={logo} alt="logo INH News" className="w-32 h-32 ml-3"/>
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-3xl text-[#E2E2B6] font-extrabold _font-family">Diário 10</h1>
                    </div>
               </div>

               <div >
               </div>

                <div className="flex items-center justify-end">
                    <div className="hidden md:flex">
                        <HeaderForm setCountry={ setCountry } setLang = { setLang }/>
                    </div>
                    <div className="flex md:hidden absolute top-5 right-5">
                        <MDScreenForm setLang={ setLang } setCountry={ setCountry } category={category} setCategory={setCategory}/>
                    </div>
                </div>
            </div>
            <div className="hidden bg-blue-500 mb-4 md:grid md:grid-cols-9 shadow-xl shadow-gray-300">
                  <TopicNavigation category={category} setCategory={setCategory}/>  
            </div>
        </div>
    )
}

export default Header