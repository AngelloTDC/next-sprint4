import { FormContact } from "@/components/FormContact";
import { getContactById } from "@/utils/contact";

interface Params {
  id: string;
}

export interface Pageprops {
  params: Promise<Params>;
}

export default async function ContatoUnidade({ params }: Pageprops) {
  const { id } = await params;

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
