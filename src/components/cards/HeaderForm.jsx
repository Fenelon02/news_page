import { useForm, FormProvider } from "react-hook-form";
import Select from "../ui/Select";
import { useState } from "react";
import Button from "../ui/Button";

const HeaderForm = ({setCountry, setLang}) => {
    const methods = useForm()
    const { register } = methods;

    const onSubmit = data => {
        setCountry(data.country)
        setLang(data.lang)
    }

    return(
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} className="flex flex-col md:flex-row items-center justify-center md:mr-4">
                <Select
                    options={
                        [
                            {label: "Português", value: "pt"},
                            {label: "English", value: "en"},
                            {label: "Español", value: "es"},
                            {label: "Français", value: "fr"},
                            {label: "Deutsch", value: "de"},
                            {label: "中國人", value: "zh"},
                            {label: "日本語", value: "ja"}
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
                            {label: "España", value: "es"},
                            {label: "France", value: "fr"},
                            {label: "Deutschland", value: "de"},
                            {label: "中國", value: "cn"},
                            {label: "日本", value: "jp"}
                        ]
                    }
                    selectName="country"
                    required={true}
                />

                <Button 
                    type="submit" 
                    variant="header"
                    width="full"
                    children={
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                        </svg>
                   }
                />
                    
            </form>
        </FormProvider>
    )
}

export default HeaderForm