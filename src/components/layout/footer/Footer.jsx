export default function Footer() {
  return (
    <footer className="bg-blue-900 text-gray-300 py-8">
      <div className=" mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div>
          <h2 className="text-xl font-bold text-white mb-2">News Page</h2>
          <p className="text-sm">
            Sua plataforma de notícias nota 10.            
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-2">Links Úteis</h2>
          <ul className="space-y-1 text-sm">
            <li><a href="/" className="hover:text-white">Início</a></li>
            <li><a href="#" className="hover:text-white">Sobre</a></li>
            <li><a href="#" className="hover:text-white">Contato</a></li>
            <li><a href="#" className="hover:text-white">Privacidade</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} News Page. Todos os direitos reservados.
      </div>
    </footer>
  );
}
