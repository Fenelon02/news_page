import { useForm, FormProvider, useFormContext } from "react-hook-form";
import Select from "../ui/Select";
import { useState } from "react";
import Button from "../ui/Button";

const HeaderForm = ({onSearch}) => {
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
        onSearch(data.lang, data.country, category)
    }

    return(
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

                <Button 
                    type="submit" 
                    className="bg-amber-100 h-full" 
                    variant="header"
                    width="full"
                    children={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                                </svg>}
                />
                    
            </form>
        </FormProvider>
    )
}

export default HeaderForm