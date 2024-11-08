import { enderecosData } from "@/utils/addresses";
import Link from "next/link";

export default function Enderecos() {
  return (
    <div className="max-w-5xl mx-auto py-8 px-4 text-center">
      <h1 className="mb-8 text-4xl font-bold text-white">Nossos Endereços!</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {enderecosData.map((endereco) => (
          <details
            key={endereco.id}
            className="group p-6 rounded-lg shadow-md bg-white bg-opacity-80 text-blue-500 cursor-pointer transition-transform duration-300 transform hover:scale-105 open:bg-blue-500 open:text-white"
          >
            <summary className="text-xl font-semibold list-none flex justify-between items-center transition-colors duration-300 group-hover:text-blue-600">
              {endereco.title}
            </summary>
            <div className="mt-4">
              <p className="text-sm text-gray-200">{endereco.description}</p>
              <Link
                href={`/enderecos/${endereco.id}`}
                className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
              >
                Ver Detalhes
              </Link>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
