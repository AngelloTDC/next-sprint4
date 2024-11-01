import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-6 bg-transparent text-white font-semibold">
      <Link 
        href="/" 
        className="text-3xl font-bold mr-6"
      >
        Porto-AutoHelp
      </Link>

      <div className="flex space-x-10 ml-6">
        <Link
          href="/"
          className="
            relative text-lg font-medium 
            transition duration-300 
            hover:text-blue-400 
            after:content-[''] 
            after:absolute 
            after:left-0 
            after:bottom-0 
            after:h-[2px] 
            after:w-0 
            after:bg-blue-400 
            hover:after:w-full 
            after:transition-all 
            after:duration-300
          "
        >
          Home
        </Link>

        <Link
          href="/contato"
          className="
            relative text-lg font-medium 
            transition duration-300 
            hover:text-blue-400 
            after:content-[''] 
            after:absolute 
            after:left-0 
            after:bottom-0 
            after:h-[2px] 
            after:w-0 
            after:bg-blue-400 
            hover:after:w-full 
            after:transition-all 
            after:duration-300
          "
        >
          Contato
        </Link>

        <Link
          href="/servicos"
          className="
            relative text-lg font-medium 
            transition duration-300 
            hover:text-blue-400 
            after:content-[''] 
            after:absolute 
            after:left-0 
            after:bottom-0 
            after:h-[2px] 
            after:w-0 
            after:bg-blue-400 
            hover:after:w-full 
            after:transition-all 
            after:duration-300
          "
        >
          Serviços
        </Link>

        <Link
          href="/enderecos"
          className="
            relative text-lg font-medium 
            transition duration-300 
            hover:text-blue-400 
            after:content-[''] 
            after:absolute 
            after:left-0 
            after:bottom-0 
            after:h-[2px] 
            after:w-0 
            after:bg-blue-400 
            hover:after:w-full 
            after:transition-all 
            after:duration-300
          "
        >
          Endereços
        </Link>

        <Link
          href="/integrantes"
          className="
            relative text-lg font-medium 
            transition duration-300 
            hover:text-blue-400 
            after:content-[''] 
            after:absolute 
            after:left-0 
            after:bottom-0 
            after:h-[2px] 
            after:w-0 
            after:bg-blue-400 
            hover:after:w-full 
            after:transition-all 
            after:duration-300
          "
        >
          Integrantes
        </Link>
      </div>
    </nav>
  );
}
