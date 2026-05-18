import { RegistroIndustrial } from "../types/RegistroIndustrial";

export const registrosMock: RegistroIndustrial[] = [
  {
    id: 1,
    nome: "Máquina A",
    descricao: "Funcionamento normal",
    status: "normal",
    data: "2026-05-18",
  },
  {
    id: 2,
    nome: "Sensor B",
    descricao: "Temperatura elevada",
    status: "alerta",
    data: "2026-05-18",
  },
];