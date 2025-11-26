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

const CategoriesBtnRender = ({onSearch}) => {
    return(
        CATEGORIES.map((cat) => (
            <Button
                key = {cat.value}
                id = {cat.value}
                variant="primary"
                width="full"
                children={cat.label}
                className="h-12"
                onClick={() => {
                    setCategory(cat.value);
                }}
                
            />
        ))
    )
}

export default CategoriesBtnRender