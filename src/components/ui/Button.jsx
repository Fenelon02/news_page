const Button = (props) =>{
    const variants = {
        primary: "bg-blue-500 text-white hover:bg-blue-700 focus:bg-blue-700 focus:rounded-b-xl hover:rounded-b-xl",
        secondary: "bg-gray-500 text-white hover:bg-gray-600 focus:bg-blue-600",  
    }
    const width = {
        full: "w-full",
        small: "w-32",
        medium: "w-48",
        large: "w-64"
    }

    const btnClasses = [
        variants[props.variant] || variants.primary,
        width[props.width] || variants.full
    ].join(" ")

    return (
        <div>
            <button className={`${btnClasses} ${props.className || ""}` } onClick={props.onClick} key={props.id}>
                {props.icon}
                {props.children}
            </button>
        </div>
    )
}

export default Button