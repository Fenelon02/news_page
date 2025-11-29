import HeaderForm from "./HeaderForm";
import TopicNavigation from "./TopicNavigation";
import { useState } from "react";
import Button from "../ui/Button";

const MDScreenForm = ({ setLang, setCountry, category, setCategory }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className={`p-2 border border-amber-100 rounded-xl m-2 flex flex-col justify-end items-end ${open ? "shadow-xl shadow-gray-400 bg-blue-600" : "bg-blue-700"}`}>
            <Button onClick={() => setOpen(!open)} >
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                </svg>
            </Button>
            {open && (
                <div>
                    <HeaderForm setCountry={setCountry} setLang={setLang} />
                    <div className="flex flex-col">
                        <TopicNavigation category={category} setCategory={setCategory} />  
                    </div>
                </div>
            )}
        </div>
    );
};

export default MDScreenForm;
