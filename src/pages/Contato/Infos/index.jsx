import { LuMail, LuMapPin, LuPhone } from "react-icons/lu";

export default function Infos() {
  return (
    <div className=" bg-gray-800/20 p-6 rounded-2xl grid grid-cols-1">
      <h3 className="font-dm text-xl text-gray-800 lg:mb-4">
        Informações de contato
      </h3>
      <div className="grid grid-cols-1 gap-4 mt-6 lg:mt-0">
        <div className="flex items-center gap-4">
          <div className="bg-gray-800 text-rose p-3 rounded-full">
            <LuMail className="w-7 h-7" />
          </div>
          <span>
            <h4 className="font-dm text-lg">Email</h4>
            <a href="mailto:contato@entrefolhas.com.br">
              contato@elegancehome.com.br
            </a>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-gray-800 text-rose p-3 rounded-full">
            <LuPhone className="w-7 h-7" />
          </div>
          <span>
            <h4 className="font-dm text-lg">Telefone</h4>
            <a href="tel:+551199876-5432">(47) 99876-5432</a>
          </span>
        </div>
        <div className="flex items-start gap-4">
          <div className="bg-gray-800 text-rose p-3 rounded-full">
            <LuMapPin className="w-7 h-7" />
          </div>
          <span>
            <h4 className="font-dm text-lg">Endereço</h4>
            <span>
              <p>Rua das Hortênsias, 123</p>
              <p>Jardim Botânico</p>
              <p>Brusque - SC</p>
            </span>
          </span>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-2">
        <h3 className="font-dm text-xl text-gray-800">
          Horário de Funcionamento
        </h3>
        <p>Segunda a Sexta: 9h às 18h</p>
        <p>Sábado: 10h às 16h</p>
      </div>
    </div>
  );
}
