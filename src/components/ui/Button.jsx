const Button = (props) =>{
    const variants = {
        primary: "bg-blue-500 text-white hover:bg-blue-700 focus:bg-blue-700 focus:rounded-b-xl hover:rounded-b-xl mr-2 px-2 h-8 w-15 flex flex-col items-center justify-center",
        header:"rounded-lg bg-amber-100 mr-2 px-2 h-8 focus:shadow-lg focus:shadow-white hover:shadow-md hover:shadow-amber-100 flex flex-col items-center justify-center",  
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
            <button className={`${btnClasses} ${props.className || ""}` } onClick={props.onClick} key={props.id} type={props.type || "button"}>
                {props.icon}
                {props.children}
            </button>
        </div>
    )
}

export default Button