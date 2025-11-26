import { useFormContext } from "react-hook-form";

const Select = ({options, selectName, required}) => {
    const { register } = useFormContext();
    return(
        <select {...register(`${selectName}`, { required: {required} })} className="w-40 rounded-lg bg-amber-100 mr-2 px-2 h-8 hover:shadow-md hover:shadow-amber-100 focus:outline-0">
            {options.map((option) => (
                <option key={option.value} value={option.value} >{option.label}</option>
            ))}
        </select>
    )
}

export default Select