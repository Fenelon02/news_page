import logo from "../../assets/logo.svg"
import HeaderForm from "./HeaderForm"
import CategoriesBtnRender from "./CategoryBtnRender"


const Header = ({onSearch}) => {

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
                    <HeaderForm onSearch={onSearch}/>
                </div>
            </div>
            <div className="bg-blue-500 flex mb-4 overflow-x-scroll">
                  <CategoriesBtnRender onSearch={onSearch}/>  
            </div>
        </div>
    )
}

export default Header