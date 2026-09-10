export type Product = {
  id: string;
  name: string;
  category: string;
  brand: string;
  description: string;
  image?: string;
  crop?: [number, number];
  tags: string[];
};
export const products: Product[] = [
  {
    id: "compressor",
    name: "Compressores de ar",
    category: "Compressores",
    brand: "PRESSURE",
    description:
      "Força e desempenho para ferramentas pneumáticas, pintura e a rotina da sua oficina. Consulte o dimensionamento ideal para a sua operação.",
    image: "/images/compressor.png",
    tags: ["Oficinas e indústria", "Linha Storm"],
  },
  {
    id: "gerador",
    name: "Geradores a gasolina",
    category: "Geradores",
    brand: "TEKNA",
    description:
      "Energia para manter o trabalho em movimento. Conheça as opções de geradores e encontre a potência adequada para os seus equipamentos.",
    image: "/images/gerador.jpg",
    tags: ["Energia e autonomia", "Uso profissional"],
  },
  {
    id: "motobomba",
    name: "Motobombas",
    category: "Bombas e lavadoras",
    brand: "TEKNA",
    description:
      "Soluções para movimentação de água no campo, na construção e no dia a dia. Nossa equipe ajuda a escolher vazão e altura manométrica adequadas.",
    image: "/images/motobomba.png",
    tags: ["Transferência de água", "Campo e construção"],
  },
  {
    id: "furadeira",
    name: "Furadeiras de bancada",
    category: "Ferramentas",
    brand: "FERRARI",
    description:
      "Estabilidade e precisão para os seus projetos. Equipamentos para perfuração de diferentes materiais, com orientação para a aplicação certa.",
    image: "/images/furadeira.jpg",
    tags: ["Precisão no trabalho", "Oficinas"],
  },
  {
    id: "aspirador",
    name: "Aspiradores profissionais",
    category: "Bombas e lavadoras",
    brand: "LIMPEZA PROFISSIONAL",
    description:
      "Aspiradores para os cuidados com ambientes e veículos. Consulte modelos, acessórios e aplicações com a nossa equipe.",
    crop: [97.5, 1.5],
    tags: ["Limpeza", "Estética automotiva"],
  },
  {
    id: "inversora",
    name: "Inversoras de solda",
    category: "Ferramentas",
    brand: "SOLDA E MANUTENÇÃO",
    description:
      "Equipamentos compactos para serviços de soldagem e manutenção. Consulte as opções para o seu tipo de trabalho.",
    crop: [40.5, 66.2],
    tags: ["Soldagem", "Serralheria"],
  },
  {
    id: "rocadeira",
    name: "Roçadeiras e podadores",
    category: "Campo e jardim",
    brand: "CAMPO E JARDIM",
    description:
      "Ferramentas para cuidar de áreas verdes, com opções para manutenção, corte e poda. Conte com ajuda para escolher o equipamento.",
    crop: [21.5, 66.2],
    tags: ["Áreas verdes", "Manutenção"],
  },
  {
    id: "betoneira",
    name: "Betoneiras",
    category: "Construção",
    brand: "CONSTRUÇÃO CIVIL",
    description:
      "Mais produtividade na preparação de concreto e argamassa. Consulte opções de capacidade para a sua obra.",
    crop: [59.5, 66.2],
    tags: ["Construção", "Produtividade"],
  },
  {
    id: "ferramentas",
    name: "Ferramentas elétricas",
    category: "Ferramentas",
    brand: "PARA QUEM FAZ",
    description:
      "Furadeiras, esmerilhadeiras e outras ferramentas para acompanhar cada etapa do seu projeto.",
    crop: [59.5, 98.4],
    tags: ["Obras e manutenção", "Versatilidade"],
  },
  {
    id: "forrageira",
    name: "Forrageiras e trituradores",
    category: "Campo e jardim",
    brand: "LINHA AGRÍCOLA",
    description:
      "Soluções para o preparo de forragem e a rotina da propriedade rural. Fale com a equipe sobre a sua necessidade.",
    crop: [78.5, 66.2],
    tags: ["Propriedade rural", "Preparo de forragem"],
  },
  {
    id: "elevador",
    name: "Equipamentos automotivos",
    category: "Ferramentas",
    brand: "OFICINAS E AUTO CENTERS",
    description:
      "Elevadores e acessórios para equipar a sua oficina. Consulte a linha e a disponibilidade com a nossa equipe.",
    crop: [2.5, 33.9],
    tags: ["Auto centers", "Oficinas"],
  },
  {
    id: "pecas",
    name: "Peças e acessórios",
    category: "Peças e acessórios",
    brand: "CADA DETALHE IMPORTA",
    description:
      "Mangueiras, conexões, filtros, correias, pressostatos e acessórios. Envie a marca e o modelo do equipamento para consultar a compatibilidade.",
    crop: [97.5, 98.4],
    tags: ["Reposição", "Pneumática"],
  },
];
export const categories = [
  "Todos",
  "Compressores",
  "Geradores",
  "Bombas e lavadoras",
  "Ferramentas",
  "Campo e jardim",
  "Construção",
  "Peças e acessórios",
];
export const company = {
  phone: "(75) 3221-8945",
  whatsapp: "5575981653954",
  address: "Av. Presidente Dutra, 1495",
  city: "Feira de Santana · BA",
  maps: "https://www.google.com/maps/search/?api=1&query=Casa+dos+Compressores+Av+Presidente+Dutra+1495+Feira+de+Santana",
};
export const whatsappUrl = (
  message = "Olá! Vim pelo site da Casa dos Compressores e gostaria de um orçamento.",
) => `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;
