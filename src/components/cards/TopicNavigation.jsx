import Button from "../ui/Button";

const CATEGORIES = [
    { value: "general", label: "Geral" },
    { value: "world", label: "Mundo" },
    { value: "nation", label: "Nação" },
    { value: "business", label: "Negócios" },
    { value: "technology", label: "Tecnologia" },
    { value: "entertainment", label: "Entreterimento" },
    { value: "sports", label: "Esportes" },
    { value: "science", label: "Ciência" },
    { value: "health", label: "Saúde" }
]

const TopicNavigation = ({category, setCategory}) => {

    return(
        CATEGORIES.map((cat) => {
            if(category === cat.value){
               return(
                <Button
                key = {cat.value}
                id = {cat.value}
                variant="TopicNavigation"
                width="full"
                children={cat.label}
                className="h-12 bg-blue-700"
                onClick={() => {
                    setCategory(cat.value)}}/>  
            )} else{
                return(
                    <Button
                    key = {cat.value}
                    id = {cat.value}
                    variant="TopicNavigation"
                    width="full"
                    children={cat.label}
                    className="h-12 bg-blue-500"
                    onClick={() => {
                        setCategory(cat.value)}}/>  
                )
            }
        })
    )
}

export default TopicNavigation