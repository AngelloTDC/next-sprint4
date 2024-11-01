import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-end p-4 space-x-8 text-sm text-white">
      <Link href="/home" className="hover:underline">Home</Link>
      <Link href="/contato" className="hover:underline">Contato</Link>
      <Link href="/servicos" className="hover:underline">Serviços</Link>
      <Link href="/enderecos" className="hover:underline">Endereços</Link>
      <Link href="/integrantes" className="hover:underline">Integrantes</Link>
    </nav>
  );
}
