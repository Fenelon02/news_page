import logo from "../../assets/logo.svg"
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import Select from "../ui/Select";
import { useState } from "react";
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

    const CATEGORIES = [
        { value: "general", label: "General" },
        { value: "world", label: "World" },
        { value: "nation", label: "Nation" },
        { value: "business", label: "Business" },
        { value: "technology", label: "Technology" },
        { value: "entertainment", label: "Entertainment" },
        { value: "sports", label: "Sports" },
        { value: "science", label: "Science" },
        { value: "health", label: "Health" },
    ];


    return(
        <div>
            <div className="grid grid-cols-3 bg-blue-700">
               <div className="flex flex-row">
                   <img src={logo} alt="logo INH News" className="w-32 h-32 ml-3"/>
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-3xl text-[#E2E2B6] font-extrabold _font-family">INH News</h1>
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
                                            {label: "English", value: "en"},
                                            {label: "Português", value: "pt"},
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
                                            {label: "EUA", value: "us"},
                                            {label: "Brasil", value: "br"},
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
                               variant="primary"
                               width="full"
                               children={cat.label}
                               className="h-12"
                               onClick={() => {
                                   setCategory(cat.value);
                                   onSearch(lang, country, category);
                               }}
                           />
                       ))
                    }
                </div>
        </div>
    )
}

export default Header