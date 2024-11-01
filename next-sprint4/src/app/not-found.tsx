import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gradient-to-r from-teal-500 to-blue-600 text-white text-center">
      <h1 className="text-5xl font-bold mb-4">404 - Página Não Encontrada</h1>
      <p className="text-lg mb-8">Desculpe, mas a página que você está procurando não existe.</p>
      <Link href="/">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition">
          Voltar para a Home
        </button>
      </Link>
    </div>
  );
}
