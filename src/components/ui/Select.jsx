import { useFormContext } from "react-hook-form";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const Select = ({ options, name, placeholder }) => {
  const { setValue, register, watch } = useFormContext();
  const [open, setOpen] = useState(false);

  const selectedValue = watch(name);
  const selectedOption = options.find((option) => option.value === selectedValue);

  const handleSelect = (value) => {
    setValue(name, value);
    setOpen(false);
  };

  return (
    <div className="relative w-44 md:w-52">
      <input type="hidden" {...register(name)} />

      <div
        onClick={() => setOpen(!open)}
        className=" w-full bg-blue-600 text-white font-medium border border-blue-400 rounded-xl px-3 py-2 shadow-sm transition-all duration-200 hover:bg-blue-400 cursor-pointer flex justify-between items-center"
      >
        {selectedOption ? selectedOption.label : placeholder}
        <ChevronDown
          size={16}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </div>

      {open && (
        <div className="absolute mt-2 w-full rounded-xl border border-blue-100 bg-blue-300 shadow-lg overflow-hidden ">
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className=" px-3 py-2 text-blue-950 hover:bg-blue-400 cursor-pointer transition-colors"
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;

