import { useForm, FormProvider } from "react-hook-form";
import Select from "../../ui/Select"
import Button from "../../ui/Button";
import { Search } from 'lucide-react';

const HeaderForm = ({setCountry, setLang}) => {
    const methods = useForm()
    const { register } = methods;

    const onSubmit = data => {
        setCountry(data.country)
        setLang(data.lang)
    }

    return(
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} className="flex flex-col md:flex-row items-center justify-center md:mr-4 gap-3">
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
                />

                <Button
                    type="submit"
                    variant="header"
                    width="header"
                    className="md:w-full"
                    children={
                            <Search />
                    }
                />
                    
            </form>
        </FormProvider>
    )
}

export default HeaderForm