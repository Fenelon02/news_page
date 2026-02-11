const techList = [
  "React",
  "Vite",
  "TailwindCSS",
  "GNews API",
  "Axios",
  "React Hook Form",
  "Lucide Icons",
  "React Router"
];

const contacts = [
  {
    name: "GitHub",
    link: "https://github.com/Fenelon02"
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/joao-fenelon-ramos-soares/"
  }
];



export default function Footer(){
    return(
        <footer className="bg-blue-900">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4">
                    <h2 className="text-xl md:text-2xl font-bold text-white">Desenvolvedor</h2>
                    <p className="text-white md:text-xl">João Fenelon</p>
                </div>
                <div className="p-4">
                    <h2 className="text-xl md:text-2xl font-bold text-white">Tecnologias Utilizadas</h2>
                    <ul>
                        {techList.map((tech, index) => (
                            <li className="flex items-center gap-2 p-1">
                                <div className="rounded-full h-1 w-1 bg-amber-50"></div>
                                <p className="text-white md:text-xl" key={index}>{tech}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="p-4">
                    <h2 className="text-xl md:text-2xl font-bold text-white">Contatos</h2>
                    <adress>
                        <ul>
                            {contacts.map((contact, index) => (
                                <li className="flex items-center gap-2 p-1">
                                    <div className="rounded-full h-1 w-1 bg-amber-50"></div>
                                    <a href={contact.link} className="text-white md:text-xl" key={index}>{contact.name}</a>
                                </li>
                            ))}
                        </ul>
                    </adress>
                </div>
            </div>
            <div className="text-center p-3 bg-blue-950 text-white font-light">
                Todos os direitos reservados ®Diário 10
            </div>
        </footer>
    )
}