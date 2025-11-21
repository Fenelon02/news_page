import logo from "../../assets/logo.svg"
import { useForm } from "react-hook-form";

const Header = ({onSearch}) => {
    const { register, handleSubmit } = useForm({
        defaultValues: {
          lang: "en",
          country: "us"
        }
      });
    
    const onSubmit = data => {
        onSearch(data.lang, data.country);
    };



    return(
        <div className="grid grid-cols-3 bg-blue-600">
           <div className="flex flex-row">
               <img src={logo} alt="logo INH News" className="w-32 h-32 ml-3"/>
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-3xl text-[#E2E2B6] font-extrabold _font-family">INH News</h1>
                </div>
           </div>
           <div >
           </div>
            <div className="flex flex-row items-center justify-end">
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-row">
                        <select {...register("lang", { required: true })} className="w-40 rounded-lg bg-amber-100 mr-2 px-2 h-8">
                            <option value="en">en</option>
                            <option value="pt">pt</option>
                            <option value="es">es</option>
                            <option value="fr">fr</option>
                        </select>

                        <select {...register("country", { required: true })} className="w-40 rounded-lg bg-amber-100 mr-2 px-2 h-8">
                            <option value="us">EUA</option>
                            <option value="br">Brazil</option>
                            <option value="fr">France</option>
                            <option value="es">Spain</option>
                        </select>

                        <button type="submit" className="bg-amber-100 rounded-lg mr-2 px-2 h-8 w-15 flex flex-col items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                            </svg>
                        </button>
                    </form>

            </div>
        </div>
    )
}

export default Header