import { useFormContext } from "react-hook-form";

const Select = ({options, selectName, required}) => {
    const { register } = useFormContext();

    return(
        <select {...register(`${selectName}`, {required} )} className="w-40 text-white border border-white hover:bg-white hover:text-blue-600 p-2 rounded-lg transition-colors my-2 md:my-0 mr-2 focus:outline-none h-9">
            {options.map((option) => (
                <option key={option.value} value={option.value} >{option.label}</option>
            ))}
        </select>
    )
}

export default Select