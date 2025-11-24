import { useFormContext } from "react-hook-form";

const Select = ({options, selectName, required}) => {
    const { register } = useFormContext();
    return(
        <select {...register(`${selectName}`, { required: {required} })} className="w-40 rounded-lg bg-amber-100 mr-2 px-2 h-8 focus:shadow-lg focus:shadow-white hover:outline-2 hover:outline-amber-300">
            {options.map((option) => (
                <option key={option.value} value={option.value} >{option.label}</option>
            ))}
        </select>
    )
}

export default Select