import { getAddressById } from "@/utils/addresses";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function EnderecoDetalhe({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  if (!id) return notFound();

  const enderecoId = parseInt(id, 10);
  const endereco = getAddressById(enderecoId);

  if (!endereco) {
    return (
      <div className="flex flex-col items-center text-center text-white mt-10">
        <h1 className="text-2xl font-bold text-red-500">
          Endereço não encontrado
        </h1>
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
    <div className="flex flex-col items-center text-center mt-10 w-full">
      <div className="p-8 bg-white rounded-lg shadow-lg max-w-[532px] w-full">
        <h1 className="text-3xl font-bold mb-4 text-blue-500">
          {endereco.title}
        </h1>
        <p className="text-lg text-gray-700 mb-6">{endereco.description}</p>

        <div className="w-full h-64 rounded-lg shadow-md relative bg-gray-200 min-w-80 max-w-[500px]">
          <iframe
            src={`https://www.google.com/maps?q=${endereco.latitude},${endereco.longitude}&z=15&output=embed`}
            width="100%"
            height="100%"
            loading="lazy"
            className="min-w-80 max-w-[500px] w-full"
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
