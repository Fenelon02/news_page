import logo from "../../assets/logo.svg"
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import Select from "../ui/Select";
import { useState, useEffect } from "react";
import Button from "../ui/Button";

const Header = ({onSearch}) => {
    const methods = useForm()
    const { register } = methods;
    const [lang, setLang] = useState("pt")
    const [country, setCountry] = useState("br")
    const [category, setCategory] = useState("world")

    const onSubmit = data => {
        if(data.lang !== lang){
            setLang(data.lang);
        }
        if(data.country !== country){
            setCountry(data.country);
        }
        if(data.category !== category){
            setCategory(data.category);
        }

        onSearch(data.lang, data.country);
    };

    useEffect(() => {
        onSearch(lang, country, category);
    }, [category])
    

    const CATEGORIES = [
        { value: "general", label: "Geral" },
        { value: "world", label: "Mundo" },
        { value: "nation", label: "Nação" },
        { value: "business", label: "Negócios" },
        { value: "technology", label: "Tecnologia" },
        { value: "entertainment", label: "Entreterimento" },
        { value: "sports", label: "Esportes" },
        { value: "science", label: "Ciência" },
        { value: "health", label: "Saúde" },
    ];


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
                        <FormProvider {...methods}>
                            <form onSubmit={methods.handleSubmit(onSubmit)} className="flex flex-row">
                                <Select
                                    options={
                                        [
                                            {label: "Português", value: "pt"},
                                            {label: "English", value: "en"},
                                            {label: "Espanhol", value: "es"},
                                            {label: "Francês", value: "fr"}
                                        ]
                                    }
                                    selectName="lang"
                                    required={true}
                                />
                                <Select
                                    options={
                                        [
                                            {label: "Brasil", value: "br"},
                                            {label: "EUA", value: "us"},
                                            {label: "Espanha", value: "es"},
                                            {label: "França", value: "fr"}
                                        ]
                                    }
                                    selectName="country"
                                    required={true}
                                />
            
                                <button type="submit" className="bg-amber-100 rounded-lg mr-2 px-2 h-8 w-15 flex flex-col items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                                    </svg>
                                </button>
                            </form>
                        </FormProvider>
                </div>
            </div>
            <div className="bg-blue-500 grid grid-cols-9 mb-4">
                    {
                       CATEGORIES.map((cat) => (
                           <Button
                               key = {cat.value}
                               id = {cat.value}
                               variant="primary"
                               width="full"
                               children={cat.label}
                               className="h-12"
                               onClick={() => {
                                   setCategory(cat.value);
                               }}
                           />
                       ))
                    }
                </div>
        </div>
    )
}

export default Header