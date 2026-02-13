import logo from "../../../assets/logo.svg"
import HeaderForm from "./HeaderForm";
import TopicNavigation from "../../cards/notices/TopicNavigation"
import { useEffect, useState } from "react";
import Button from "../../ui/Button";
import { TextAlignJustify } from 'lucide-react';


const Header = ({onSearch}) => {
    const [category, setCategory] = useState("general");
    const [lang, setLang] = useState("pt");
    const [country, setCountry] = useState("br");
    const [open, setOpen] = useState(false)

    useEffect(() => {
        onSearch(lang, country, category);
    }, [lang, country, category]);

    return(
        <header className="h-[5vh] sticky top-0">
            <div className="grid grid-cols-3 bg-blue-700">

               <div className="flex flex-row gap-2 ml-3 col-span-2">
                   <img src={logo} alt="logo Diário 10" className="md:w-36 md:h-32 w-22 h-20 col-span-1"/>

                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-xl md:text-3xl lg:text-3xl text-[#E2E2B6] font-extrabold _font-family">Diário 10</h1>
                    </div>
               </div>


                <div className="flex items-center justify-end mr-3 lg:mr-0">
                    <div className="hidden lg:flex">
                        <HeaderForm setCountry={ setCountry } setLang = { setLang }/>
                    </div>

                    <div className="flex flex-col justify-end items-end lg:hidden">
                        <Button onClick={() => setOpen(!open)} >
                            <TextAlignJustify
                                className="w-full h-full md:h-12 md:w-12 text-[#E2E2B6]"
                            />
                        </Button>
                    </div>
                </div>

            </div>

            <div className="hidden bg-blue-500 mb-4 lg:grid lg:grid-cols-9 shadow-xl shadow-gray-300">
                  <TopicNavigation category={category} setCategory={setCategory}/>  
            </div>

            {open && (
                <nav className="h-screen bg-white p-3">
                    <HeaderForm setCountry={setCountry} setLang={setLang} />
                    <TopicNavigation category={category} setCategory={setCategory} />  
                </nav>
            )}
        </header>
    )
}

export default Header