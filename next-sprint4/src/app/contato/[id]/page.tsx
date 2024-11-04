import { FormContact } from "@/components/FormContact";
import { getContactById } from "@/utils/contact";

export default function ContatoUnidade({ params }: { params: { id: string } }) {
  const { id } = params;

  const unidadeDescricao = getContactById(id);

  return (
    <div className="max-w-2xl mx-auto p-8 bg-gradient-to-b from-blue-500 to-teal-500 rounded-3xl shadow-lg">
      <h1 className="text-3xl font-bold text-center text-white mb-6">
        Fale com a {unidadeDescricao?.nome}
      </h1>
      <FormContact />
    </div>
  );
}
