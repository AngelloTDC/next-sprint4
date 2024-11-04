import { getServiceById } from "@/utils/service";
import { notFound } from "next/navigation";


export default async function ServicoDetalhe({ params }: { params: { id: string } }) {
  const { id } = await params


  const serviceId = parseInt(id, 10);
  const service = getServiceById(serviceId)

  if (!id || !service) return notFound()

  return (
    <div className="flex flex-col items-center text-white mt-10">
      <h1 className="text-4xl font-bold mb-4 text-blue-500">{service.title}</h1>
      <p className="text-lg text-gray-700">{service.description}</p>
    </div>
  );
}

