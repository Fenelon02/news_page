import logo from "../../assets/logo.svg"
import HeaderForm from "./HeaderForm"
import TopicNavigation from "./TopicNavigation"
import { useEffect, useState } from "react";


const Header = ({onSearch}) => {
    const [category, setCategory] = useState("general");
    const [lang, setLang] = useState("pt");
    const [country, setCountry] = useState("br");

    useEffect(() => {
        onSearch(lang, country, category);
    }, [lang, country, category]);

    return(
        <div>
            <div className="grid grid-cols-3 bg-blue-700">
               <div className="flex flex-row">
                   <img src={logo} alt="logo INH News" className="w-32 h-32 ml-3"/>
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-3xl text-[#E2E2B6] font-extrabold _font-family">Diário 10</h1>
                    </div>
               </div>

               <div >
               </div>

                <div className="flex flex-row items-center justify-end">
                    <HeaderForm setCountry={ setCountry } setLang = { setLang }/>
                </div>
            </div>
            <div className="bg-blue-500 flex mb-4 overflow-x-scroll sm:grid sm:grid-cols-9">
                  <TopicNavigation setCategory={setCategory}/>  
            </div>
        </div>
    )
}

export default Header