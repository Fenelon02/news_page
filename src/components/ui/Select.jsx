import { useFormContext } from "react-hook-form";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const Select = ({ options, selectName }) => {
  const { setValue } = useFormContext();
  const [open, setOpen] = useState(false);

  const handleSelect = (value) => {
    setValue(selectName, value);
    setOpen(false);
  };

  return (
    <div className="relative w-44 md:w-52">
      
      <div onClick={() => setOpen(!open)} className=" w-full bg-blue-600 text-[#E2E2B6] font-medium border border-blue-400 rounded-xl px-3 py-2 shadow-sm transition-all duration-200 hover:bg-blue-400 cursor-pointer flex justify-between items-center" >
        {selectName}
        <ChevronDown size={16} className={`transition-transform ${open ? "rotate-180" : ""}`}/>
      </div>

      {open && (
        <div className="absolute mt-2 w-full rounded-xl border border-blue-100 bg-blue-300 shadow-lg overflow-hidden ">
          {options.map(option => (
            <div key={option.value} onClick={() => handleSelect(option.value)} className=" px-3 py-2 text-blue-950 hover:bg-blue-400 cursor-pointer transition-colors">
              {option.label}
            </div>
          ))}
        </div>
      )}

    </div>
  );
};

export default Select;
