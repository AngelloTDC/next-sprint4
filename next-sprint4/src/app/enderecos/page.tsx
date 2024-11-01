export default function Enderecos() {
  const enderecosData = [
    { id: 1, title: 'Unidade Paulista', description: 'Edifício Paulista - Av. Paulista, 1106 - 7º andar' },
    { id: 2, title: 'Unidade Aclimação', description: 'Av. Lins de Vasconcelos, 1222 - Aclimação' },
    { id: 3, title: 'Unidade Campos Elíseos', description: 'Alameda Barão de Piracicaba, 618 - Campos Elíseos' },
    { id: 4, title: 'Unidade Campos Elíseos 2', description: 'R. Guaianazes, 1238 - Campos Elíseos' },
  ];

  return (
    <div className="max-w-5xl mx-auto py-8 px-4 text-center">
      <h1 className="mb-8 text-4xl font-bold text-white">Nossos Endereços!</h1>
      <div className="flex flex-col gap-6"> {/* Altera de grid para flex com coluna */}
        {enderecosData.map((endereco) => (
          <details key={endereco.id} className="group p-6 rounded-lg shadow-md bg-white bg-opacity-80 text-blue-500 cursor-pointer transition-transform duration-300 transform hover:scale-105 active:bg-blue-500 active:bg-opacity-90 active:text-white open:bg-blue-500 open:text-white open:bg-opacity-90">
            <summary className="text-xl font-semibold list-none flex justify-between items-center transition-colors duration-300 group-hover:text-blue-600">{endereco.title}<span className="text-lg group-open:rotate-180 transition-transform duration-300"></span></summary>
            <p className="mt-4 text-sm transition-opacity duration-300 opacity-0 max-h-0 group-open:opacity-100 group-open:max-h-screen overflow-hidden">{endereco.description}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
