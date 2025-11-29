const Button = (props) =>{
    const variants = {
        TopicNavigation:"mb-3 md:m-0 transition-colors rounded-xl md:rounded-b-xl text-white hover:bg-blue-700 focus:bg-blue-700 md:mr-2 px-2 h-8 w-15 flex flex-col items-center justify-center hover:border hover:border-white md:border-0 ",
        header:"text-white border border-white hover:bg-white hover:text-blue-600 p-2 rounded-lg transition-colors mb-2 md:mb-0 flex items-center justify-center",  
        primary:"bg-transparent text-white p-2 rounded-lg flex items-center justify-center"
    }
    const width = {
        full: "w-full",
        small: "w-32",
        medium: "w-48",
        large: "w-64",
        header: "w-40"
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