import Link from 'next/link';

const enderecosData = [
  {
    id: 1,
    title: 'Unidade Paulista',
    description: 'Edifício Paulista - Av. Paulista, 1106 - 7º andar',
    latitude: -23.564170837402344,
    longitude: -46.65250778198242,
  },
  {
    id: 2,
    title: 'Unidade Aclimação',
    description: 'Av. Lins de Vasconcelos, 1222 - Aclimação',
    latitude: -23.573987,
    longitude: -46.644321,
  },
  {
    id: 3,
    title: 'Unidade Campos Elíseos',
    description: 'Alameda Barão de Piracicaba, 618 - Campos Elíseos',
    latitude: -23.553987,
    longitude: -46.664321,
  },
  {
    id: 4,
    title: 'Unidade Campos Elíseos 2',
    description: 'R. Guaianazes, 1238 - Campos Elíseos',
    latitude: -23.553500,
    longitude: -46.664800,
  },
];

export default async function EnderecoDetalhe({ params }: { params: { id: string } }) {
  const enderecoId = parseInt(await params.id, 10);
  const endereco = enderecosData.find((endereco) => endereco.id === enderecoId);

  if (!endereco) {
    return (
      <div className="flex flex-col items-center text-center text-white mt-10">
        <h1 className="text-2xl font-bold text-red-500">Endereço não encontrado</h1>
        <Link
          href="/enderecos"
          className="mt-6 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition duration-200"
        >
          Voltar para a lista de endereços
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center text-center mt-10">
      <div className="p-8 bg-white rounded-lg shadow-lg max-w-lg">
        <h1 className="text-3xl font-bold mb-4 text-blue-500">{endereco.title}</h1>
        <p className="text-lg text-gray-700 mb-6">{endereco.description}</p>

        <div className="w-full h-64 rounded-lg shadow-md relative bg-gray-200">
          <iframe
            src={`https://www.google.com/maps?q=${endereco.latitude},${endereco.longitude}&z=15&output=embed`}
            width="100%"
            height="100%"
            loading="lazy"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>

      <Link
        href="/enderecos"
        className="mt-6 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition duration-200"
      >
        Voltar para a lista de endereços
      </Link>
    </div>
  );
}
