import Link from 'next/link';

export default function Contato() {
  const unidades = [
    { id: 'unidade1', nome: 'Unidade Paulista' },
    { id: 'unidade2', nome: 'Unidade Aclimação' },
    { id: 'unidade3', nome: 'Unidade Campos Elíseos' },
    { id: 'unidade4', nome: 'Unidade Campos Elíseos 2' },
  ];

  return (
    <div className="max-w-2xl mx-auto p-8 bg-gradient-to-b from-blue-500 to-teal-500 rounded-3xl shadow-lg">
      <h1 className="text-3xl font-bold text-center text-white mb-6">Entre em Contato</h1>
      <p className="text-center text-white mb-4">
        Selecione uma unidade para entrar em contato:
      </p>
      <div className="flex flex-col gap-4">
        {unidades.map((unidade) => (
          <Link key={unidade.id} href={`/contato/${unidade.id}`}>
            <button className="w-full p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300">
              {unidade.nome}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}
