import { servicesData } from "@/utils/service";

export default function Servicos() {
  return (
    <div className="max-w-5xl mx-auto py-8 px-4 text-center">
      <h1 className="mb-8 text-4xl font-bold text-white">Alguns dos nossos Serviços!</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {servicesData.map((service) => (
          <details
            key={service.id}
            className="group p-0 rounded-lg shadow-md bg-white bg-opacity-80 text-blue-500 cursor-pointer transition-transform duration-300 transform hover:scale-105"
          >
            <summary className="p-6 flex items-center justify-between w-full text-xl font-semibold list-none rounded-lg transition-colors duration-300 group-hover:text-blue-600 focus:outline-none">
              {service.title}
            </summary>
            <p className="px-6 pb-6 text-sm text-gray-700">
              {service.description}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
}



