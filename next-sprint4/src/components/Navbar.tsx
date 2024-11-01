import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-transparent text-white font-semibold">
      <Link href="/" className="text-2xl font-bold">
        Porto-AutoHelp
      </Link>
      <div className="flex space-x-6">
        <Link href="/" className="relative text-white transition duration-300 hover:text-blue-400 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-400 hover:after:w-full after:transition-width after:duration-300">
          Home
        </Link>
        <Link href="/contato" className="relative text-white transition duration-300 hover:text-blue-400 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-400 hover:after:w-full after:transition-width after:duration-300">
          Contato
        </Link>
        <Link href="/servicos" className="relative text-white transition duration-300 hover:text-blue-400 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-400 hover:after:w-full after:transition-width after:duration-300">
          Serviços
        </Link>
        <Link href="/enderecos" className="relative text-white transition duration-300 hover:text-blue-400 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-400 hover:after:w-full after:transition-width after:duration-300">
          Endereços
        </Link>
        <Link href="/integrantes" className="relative text-white transition duration-300 hover:text-blue-400 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-400 hover:after:w-full after:transition-width after:duration-300">
          Integrantes
        </Link>
      </div>
    </nav>
  );
}
