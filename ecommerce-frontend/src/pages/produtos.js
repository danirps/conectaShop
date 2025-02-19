
const importAllImages = (context) => {
    const images = {};
    context.keys().forEach((key) => {
      const path = key.replace("./", ""); // Remove o './' inicial
      const [category, ...fileParts] = path.split("/"); // Aqui ele pega a categoria e o restante do caminho
      const fileName = fileParts.join("/"); // Junta novamente qualquer subpasta com o nome do arquivo
  
      if (!images[category]) {
        images[category] = {};
      }
  
      images[category][fileName] = context(key); // Agora estamos tratando corretamente os arquivos nas subpastas
    });
    return images;
  };
  
  // Use require.context para carregar as imagens das categorias, incluindo formatos adicionais
  const images = importAllImages(require.context("../assets/images", true, /\.(png|jpe?g|svg|webp|gif)$/));
  
export const categorias = [
    {
        name: "Modas",
        products: [
          { 
            id: 1, 
            name: "Camiseta Térmica Segunda Pele Proteção Uv Extreme Premium", 
            price: 34, 
            tags: ["camisetas térmicas", "roupas", "proteção UV", "segunda pele", "esporte", "inverno", "térmico", "masculino", "feminino", "fitness", "academia", "corrida", "conforto", "respirável", "secagem rápida"],
            image: images["modas"]["detalhes-camisetas/camiseta1.webp"], 
            detailImages: [
              images["modas"]["detalhes-camisetas/camiseta2.webp"], 
              images["modas"]["detalhes-camisetas/camiseta3.webp"],
              images["modas"]["detalhes-camisetas/camiseta4.webp"]
            ] 
          },
          { 
            id: 2, 
            name: "Calça Skinny Preta Masculina Jeans Com Elastano Lycra 2023", 
            price: 59, 
            tags: ["calças", "masculino", "moda masculina", "jeans", "casual", "esportivo", "elastano", "conforto", "skinny", "social", "roupas masculinas", "estilo"],
            image: images["modas"]["detalhes-calcas/calca1.webp"], 
            detailImages: [
              images["modas"]["detalhes-calcas/calca2.webp"], 
              images["modas"]["detalhes-calcas/calca3.webp"],
              images["modas"]["detalhes-calcas/calca4.webp"]
            ] 
          },
          { 
            id: 3, 
            name: "Tênis Masculino Leve Esportivo", 
            price: 66, 
            tags: ["tênis", "calçados", "esportivo", "casual", "masculino", "feminino", "conforto", "corrida", "academia", "treino", "estilo", "moda", "caminhada", "leves", "duráveis"],
            image: images["modas"]["detalhes-tenis/tenis1.webp"], 
            detailImages: [
              images["modas"]["detalhes-tenis/tenis2.webp"], 
              images["modas"]["detalhes-tenis/tenis3.webp"],
              images["modas"]["detalhes-tenis/tenis4.webp"]
            ] 
          },
          { 
            id: 7, 
            name: "Casaco Jaqueta Blusa Frio Impermeável P/neve Intensa Moto", 
            price: 78, 
            tags: ["casacos", "jaquetas", "blusas de frio", "inverno", "impermeável", "roupas masculinas", "roupas femininas", "térmico"],
            image: images["modas"]["detalhes-jaqueta/jaqueta3.webp"], 
            detailImages: [
              images["modas"]["detalhes-jaqueta/jaqueta2.webp"], 
              images["modas"]["detalhes-jaqueta/jaqueta1.webp"],
              images["modas"]["detalhes-jaqueta/jaqueta4.webp"]
            ] 
          },
          { 
            id: 8, 
            name: "Short Praia Masculino Bermudas Verão Academia Treino Corrida", 
            price: 32, 
            tags: ["bermudas", "masculino", "calção", "praia", "academia", "verão", "fitness", "casual"],
            image: images["modas"]["detalhes-bermudas/bermuda1.webp"], 
            detailImages: [
              images["modas"]["detalhes-bermudas/bermuda2.webp"], 
              images["modas"]["detalhes-bermudas/bermuda3.webp"],
              images["modas"]["detalhes-bermudas/bermuda4.webp"],
              images["modas"]["detalhes-bermudas/bermuda5.webp"]
            ] 
          }
        ],
        images: [
          { id: 1, image: images["modas"]["bannerModas/modas1.jpg"] },
          { id: 2, image: images["modas"]["bannerModas/modas2.jpg"] },
          { id: 3, image: images["modas"]["bannerModas/modas3.jpg"] }
        ]
      },
    {
      name: "Eletrônicos",
      products:  [
        { 
          id: 1, 
          name: "Samsung Galaxy A15 Dual SIM 4G 256GB Azul claro 8GB RAM", 
          price: 1079, 
          tags: ["celulares", "smartphones", "tecnologia", "eletrônicos", "dispositivos móveis", "android", "ios", "telefone", "mobilidade", "inovação", "acessórios para celular", "carregadores", "capas de proteção", "câmera", "desempenho"],
          image: images["eletronicos"]["celular/sansung.webp"], 
          detailImages: [
            images["eletronicos"]["celular/celular1.webp"],
            images["eletronicos"]["celular/celular2.webp"],
            images["eletronicos"]["celular/celular3.webp"]
          ] 
        },
        { 
          id: 2, 
          name: "Notebook Gamer Acer Nitro V ANV15-51-57WS Intel® Core™ i5-13420H 13ªGeração 512SSD 8GB", 
          price: 4120, 
          tags: ["notebooks", "laptops", "computadores portáteis", "tecnologia", "eletrônicos", "trabalho", "estudo", "jogos", "desempenho", "mobilidade", "tecnologia portátil", "hardware", "bateria de longa duração", "ultrabook"],
          image: images["eletronicos"]["notbook/notbook1.webp"], 
          detailImages: [
            images["eletronicos"]["notbook/notbook2.webp"], 
            images["eletronicos"]["notbook/notbook3.webp"],
            images["eletronicos"]["notbook/notbook4.webp"]
          ] 
        },
        { 
          id: 3, 
          name: "Câmera Gopro Hero 13 Bundle Com Handler Com 64gb Sd 2 Baterias CHDRB-131-RW Cor Preto", 
          price: 3502, 
          tags: ["câmeras", "fotografia", "filmagem", "profissional", "amador", "dslr", "mirrorless", "lentes", "tecnologia", "eletrônicos", "alta resolução", "vídeo", "zoom", "estabilização", "acessórios para câmeras"],
          image: images["eletronicos"]["GoPro/GoPro1.webp"], 
          detailImages: [
            images["eletronicos"]["GoPro/GoPro2.webp"], 
            images["eletronicos"]["GoPro/GoPro3.webp"],
            images["eletronicos"]["GoPro/GoPro4.webp"]
          ] 
        },
        { 
          id: 7, 
          name: "Smart Tv 32 Philco Roku Tv Led Dolby Áudio 110v/220v", 
          price: 998, 
          tags: ["TVs", "televisores", "smart TVs", "eletrônicos", "home theater", "4K", "8K", "telas grandes", "streaming", "tecnologia", "LED", "OLED", "QLED", "HD", "conectividade"],
          image: images["eletronicos"]["smartTv/smartTv1.webp"], 
          detailImages: [
            images["eletronicos"]["smartTv/smartTv2.webp"], 
            images["eletronicos"]["smartTv/smartTv3.webp"],
            images["eletronicos"]["smartTv/smartTv4.webp"]
          ] 
        }
      ],
      images: [
        { id: 1, image: images["eletronicos"]["banners-eletronicos/bannerseletronico1.jpg"] },
        { id: 2, image: images["eletronicos"]["banners-eletronicos/bannerseletronico2.jpg"] },
        { id: 3, image: images["eletronicos"]["banners-eletronicos/bannerseletronico3.jpg"] }
      ]
    },
    {
      name: "Beleza",
      products:  [
        { 
          id: 1, 
          name: "Henna Glance 3,5g Com Fixador 20ml E Pá Medidora Cor Castanho Escuro", 
          price: 38, 
          tags: ["cremes femininos", "hidratação", "pele feminina", "cabelo feminino", "cuidados femininos", "skincare", "anti-idade", "reparação", "nutrição", "beleza", "cosméticos", "creme hidratante", "creme facial", "creme corporal", "máscara capilar", "cabelos lisos", "cabelos cacheados", "cabelos danificados", "creme para mãos", "proteção solar", "sabonetes", "serum facial"],
          image: images["belezas"]["henna-Glance/cosmeticos1.webp"], 
          detailImages: [
            images["belezas"]["henna-Glance/cosmeticos2.webp"],
            images["belezas"]["henna-Glance/cosmeticos3.webp"],
            images["belezas"]["henna-Glance/cosmeticos4.webp"]
          ] 
        },
        { 
          id: 2, 
          name: "Creme Hidratante Facial Antissinais Vult - 100g ", 
          price: 23, 
          tags: ["cremes femininos", "hidratação", "pele feminina", "cabelo feminino", "cuidados femininos", "skincare", "anti-idade", "reparação", "nutrição", "beleza", "cosméticos", "creme hidratante", "creme facial", "creme corporal", "máscara capilar", "cabelos lisos", "cabelos cacheados", "cabelos danificados", "creme para mãos", "proteção solar", "sabonetes", "serum facial"],
          image: images["belezas"]["Creme/creme1.webp"], 
          detailImages: [
            images["belezas"]["Creme/creme2.webp"], 
            images["belezas"]["Creme/creme3.webp"]
          ] 
        },
        { 
          id: 3, 
          name: "Eico Tratamento Salão Em Casa Hidratação Intensiva Shampoo Sem Sal Condicionador Leave-in", 
          price: 78, 
          tags: ["cremes femininos", "hidratação", "pele feminina", "cabelo feminino", "cuidados femininos", "skincare", "anti-idade", "reparação", "nutrição", "beleza", "cosméticos", "creme hidratante", "creme facial", "creme corporal", "máscara capilar", "cabelos lisos", "cabelos cacheados", "cabelos danificados", "creme para mãos", "proteção solar", "sabonetes", "serum facial"],
          image: images["belezas"]["Eico-Tratamento/condicionador1.webp"], 
          detailImages: [
            images["belezas"]["Eico-Tratamento/condicionador2.webp"], 
            images["belezas"]["Eico-Tratamento/condicionador3.webp"]
          ] 
        },
      
        { 
          id: 4, 
          name: "Creme Hidratante Facial Revitalift Hialurônico Noturno 49g L'Oréal Paris", 
          price: 33, 
          tags: ["cremes femininos", "hidratação", "pele feminina", "cabelo feminino", "cuidados femininos", "skincare", "anti-idade", "reparação", "nutrição", "beleza", "cosméticos", "creme hidratante", "creme facial", "creme corporal", "máscara capilar", "cabelos lisos", "cabelos cacheados", "cabelos danificados", "creme para mãos", "proteção solar", "sabonetes", "serum facial"],
          image: images["belezas"]["Creme-Hidratante/hidratante1.webp"], 
          detailImages: [
            images["belezas"]["Creme-Hidratante/hidratante2.webp"], 
            images["belezas"]["Creme-Hidratante/hidratante3.webp"],
            images["belezas"]["Creme-Hidratante/hidratante4.webp"]
          ] 
        },
        { 
          id: 5, 
          name: "Xô Frizz Modelador De Fios 10g Forever Liss", 
          price: 27, 
          tags: ["maquiagem", "cosméticos", "beleza", "rosto", "olhos", "boca", "fundação", "pó compacto", "blush", "rímel", "batom", "delineador", "sombras", "corretivo", "base", "pincéis de maquiagem", "contorno", "iluminador", "makeup", "acessórios de maquiagem", "maquiagem para noite", "maquiagem para dia"],
          image: images["belezas"]["Batom/Batom1.webp"], 
          detailImages: [
            images["belezas"]["Batom/Batom2.webp"], 
            images["belezas"]["Batom/Batom3.webp"],
            images["belezas"]["Batom/Batom4.webp"],
            images["belezas"]["Batom/Batom5.webp"]
          ] 
        }
      ],
      images: [
        { id: 1, image: images["belezas"]["belezas-banners/bannerbelezas1.png"] },
        { id: 2, image: images["belezas"]["belezas-banners/bannerbelezas2.png"] },
        { id: 3, image: images["belezas"]["belezas-banners/bannerbelezas3.png"] }
      ]
    },
    {
      name: "Móveis",
      products:  [
        { 
          id: 1, 
          name: "Conjunto Sofá 3 E 2 Lugares Suede Istambul Flash Cor Cinza", 
          price: 1000, 
          tags: ["sofá", "móveis", "decoração", "sala de estar", "conforto", "design", "estilo", "sofá moderno", "sofá retrátil", "sofá de canto", "estofado", "almofadas", "estilo contemporâneo", "sofá confortável", "sofá de 3 lugares", "sofá de 2 lugares", "moderno", "sofá colorido", "móveis para sala"],
          image: images["moveis"]["sofa/sofa1.webp"], 
          detailImages: [
            images["moveis"]["sofa/sofa2.webp"],
            images["moveis"]["sofa/sof3.webp"]
          ] 
        },
        { 
          id: 2, 
          name: "Geladeira Crm56fk Painel Eletrônico 451 Litros Inox Consul Cor Cinza 110V", 
          price: 4770, 
          tags: ["geladeira", "eletrodomésticos", "cozinha", "frio", "conservação de alimentos", "refrigerador", "freezer", "duplex", "frost free", "inverter", "tecnologia", "geladeira inteligente", "consumo baixo", "congelador", "armário refrigerado", "refri", "prateleiras ajustáveis"],
          image: images["moveis"]["geladeira/geladeira1.webp"], 
          detailImages: [
            images["moveis"]["geladeira/geladeira2.webp"], 
            images["moveis"]["geladeira/geladeira3.webp"],
            images["moveis"]["geladeira/geladeira4.webp"],
            images["moveis"]["geladeira/geladeira5.webp"]
          ] 
        },
        { 
          id: 3, 
          name: "Cômoda Ditália 6 Gavetas Dm-221 Branco Cozy", 
          price: 639, 
          image: images["moveis"]["comoda/comoda1.webp"], 
          detailImages: [
            images["moveis"]["comoda/comoda2.webp"], 
            images["moveis"]["comoda/comoda3.webp"],
            images["moveis"]["comoda/comoda4.webp"]
          ] 
        },
      
        { 
          id: 4, 
          name: "Cama De Casal 100% Mdf 103,5x144x195cm Sofia Castanho/ Biwt", 
          price: 449, 
          tags: ["cômoda", "móveis", "decoração", "quarto", "organização", "armazenamento", "design moderno", "madeira", "cômoda de madeira", "cômoda com gavetas", "estilo", "móveis para quarto", "prateleiras", "design funcional", "conforto", "cômoda moderna"],
          image: images["moveis"]["cama/cama1.webp"], 
          detailImages: [
            images["moveis"]["cama/cama2.webp"]
          ] 
        }
      ],
      images: [
        { id: 1, image: images["moveis"]["moveis-banners/bannermoveis1.webp"] },
        { id: 2, image: images["moveis"]["moveis-banners/bannermoveis2.webp"] },
        { id: 3, image: images["moveis"]["moveis-banners/bannermoveis3.webp"] }
      ]
    },
    {
      name: "Automóveis",
      products:  [
        { 
          id: 1, 
          name: "Bateria Moto Route Suzuki Dl 650 V-strom - V Strom", 
          price: 353, 
          tags: ["bateria", "bateria para moto", "bateria para carro", "bateria para caminhão", "bateria automotiva", "energia", "veículos", "bateria de ácido", "bateria de lítio", "bateria de alta performance", "manutenção de veículos", "reposição de bateria", "início de partida", "carregamento rápido", "bateria de longa duração", "eletrônicos automotivos", "acessórios para carro"],
          image: images["Automoveis"]["Baterias/bateria1.webp"], 
          detailImages: [
            images["Automoveis"]["Baterias/bateria2.webp"]
          ] 
        },
        { 
          id: 2, 
          name: "Capa De Banco Tecido Nylon Fiat Uno 94 95 96 97 98 99 00 01", 
          price: 64, 
          tags: ["capa de banco", "banco de carro", "acessórios automotivos", "proteção de banco", "banco de carro em couro", "capa protetora", "carro", "estilo automotivo", "banco de carro confortável", "capa de banco universal", "capa de banco personalizada", "capa de tecido", "capa de banco para automóvel", "decoração de carro", "banco com proteção"],
          image: images["Automoveis"]["capa-banco/capa1.webp"], 
          detailImages: [
            images["Automoveis"]["capa-banco/capa2.webp"], 
            images["Automoveis"]["capa-banco/capa3.webp"],
            images["Automoveis"]["capa-banco/capa4.webp"]
          ] 
        },
        { 
          id: 3, 
          name: "Kit 10 Farol Milha 16leds 48w 12v/24v Quadrado Offroad 6000k", 
          price: 143,
          tags: ["faróis de LED", "iluminação automotiva", "faróis de carro", "luz de LED", "tuning", "tecnologia automotiva", "farol de alta intensidade", "faróis para carro", "iluminação de alta performance", "carros", "faróis de alta eficiência", "faróis customizados", "luz branca", "farol de LED para carro", "acessórios automotivos"], 
          image: images["Automoveis"]["farois-LED/farois1.webp"], 
          detailImages: [
            images["Automoveis"]["farois-LED/farois2.webp"], 
            images["Automoveis"]["farois-LED/farois3.webp"],
            images["Automoveis"]["farois-LED/farois4.webp"],
            images["Automoveis"]["farois-LED/farois5.webp"]
          ] 
        },  
        { 
          id: 4, 
          name: "Kit de 2 pneus Pirelli Scorpion Seal Inside 235/45R19 95 V", 
          price: 2487, 
          tags: ["pneus de carro", "pneus automotivos", "rodas", "pneus para veículos", "borracha", "pneus de alta performance", "pneus radiais", "pneus para carro de passeio", "pneus esportivos", "durabilidade", "pneus de inverno", "pneus off-road", "tamanho de pneus", "substituição de pneus", "acessórios automotivos"],
          image: images["Automoveis"]["pneus/pneus1.webp"], 
          detailImages: [
            images["Automoveis"]["pneus/pneus2.webp"],
            images["Automoveis"]["pneus/pneus3.webp"]
          ] 
        },
        { 
          id: 4, 
          name: "Palheta Limpador Parabrisas Chuva Original Punto 2008 A 2016", 
          price: 45, 
          tags: ["palheta de limpador de para-brisa", "limpador de para-brisa", "acessórios automotivos", "para-brisa", "limpeza de vidro", "chuva", "visibilidade", "palheta de carro", "manutenção automotiva", "substituição de palheta", "borracha do limpador", "palheta de silicone", "limpeza eficiente", "automóveis", "carro"],
          image: images["Automoveis"]["Limpadores-de-para-brisa/limpador1.webp"], 
          detailImages: [
            images["Automoveis"]["Limpadores-de-para-brisa/limpador2.webp"],
            images["Automoveis"]["Limpadores-de-para-brisa/limpador3.webp"],
            images["Automoveis"]["Limpadores-de-para-brisa/limpador4.webp"],
            images["Automoveis"]["Limpadores-de-para-brisa/limpador5.webp"]
          ] 
        }
      ],
      images: [
        { id: 1, image: images["Automoveis"]["automoveis-banners/descontos-pneus.jpg"] },
        { id: 1, image: images["Automoveis"]["automoveis-banners/acessorios.jpg"] },
        { id: 1, image: images["Automoveis"]["automoveis-banners/automoveis3.webp"] }
      ]
    }
  ];
  