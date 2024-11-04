import Link from 'next/link';

interface Endereco {
  id: number;
  title: string;
  description: string;
}

const enderecosData: Endereco[] = [
  { id: 1, title: 'Unidade Paulista', description: 'Edifício Paulista - Av. Paulista, 1106 - 7º andar' },
  { id: 2, title: 'Unidade Aclimação', description: 'Av. Lins de Vasconcelos, 1222 - Aclimação' },
  { id: 3, title: 'Unidade Campos Elíseos', description: 'Alameda Barão de Piracicaba, 618 - Campos Elíseos' },
  { id: 4, title: 'Unidade Campos Elíseos 2', description: 'R. Guaianazes, 1238 - Campos Elíseos' },
];

export default function EnderecoDetalhe({ params }: { params: { id: string } }) {
  const enderecoId = parseInt(params.id, 10);
  const endereco = enderecosData.find((endereco) => endereco.id === enderecoId);

  if (!endereco) return <p>Carregando...</p>;

  return (
    <div className="flex flex-col items-center text-white mt-10">
      <h1 className="text-4xl font-bold mb-4 text-blue-500">{endereco.title}</h1>
      <p className="text-lg text-gray-700 mb-6">{endereco.description}</p>

      <Link href="/enderecos" className="mt-6 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition duration-200">
        Voltar para a lista de endereços
      </Link>
    </div>
  );
}
