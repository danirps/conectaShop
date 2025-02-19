import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BannerCarousel from "../components/BannerCarousel";
import { categorias } from "./produtos"; // Importa o banco de dados simulado

// Estilos mantidos do código anterior
const HomeContainer = styled.div`
 display: grid;
  gap: 10px;
  padding: 15px;
  justify-content: center;
  
  /* Define colunas dinâmicas que se ajustam conforme o tamanho da página */
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

    @media (max-width: 768px) {
       
    padding: 3px;
    justify-content: center;
    display: grid; /* Usar grid para controle melhor das colunas */
    grid-template-columns: repeat(2, 1fr); /* 2 colunas de largura igual */
    justify-items: center;
    gap: 5px; /* Espaçamento entre os cards */
    align-items: center; /* Alinhar os itens verticalmente */
  }
`;

const CategoryContainer = styled.div`
  width: 95%;
  margin: 0 auto; /* Centraliza o elemento horizontalmente e mantém o espaçamento inferior */
  background-color:rgba(249, 249, 249, 0.81);
  padding: 20px 0;
  border-radius: 6px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 15px;
  align-items: center:
    justify-content: center;
    justify-itens: center;

   @media (max-width: 768px) {
   margin-bottom: 70px;
    width: 100%;
    align-items: center:
    justify-content: center;
    justify-itens: center;
  }
`;

const ProductCardTop = styled.div`

  overflow: hidden;
  border-bottom: 1px solid #ccc;
  height: 90%;
`;

const ProductCardBottom = styled.div`

  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #f9f9f9;
`;



const ProductCard = styled(Link)`
  text-decoration: none;
  background: white;
  color: #333;
  width: 100%;
  height: 350px;
  margin: 2px;
  padding: 0;
  border-radius: 6px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
  }

   @media (max-width: 768px) {
    width: 100%; /* Garante que o card ocupe 100% da largura da célula do grid */
    height: 320px; /* Ajusta a altura do card */
  }
`;

const CarouselCard = styled(ProductCard)`
  width: 250px; /* Tamanho fixo para os cards no carrossel */
  height: 300px; /* Tamanho fixo para os cards no carrossel */
  margin: 10px; /* Espaçamento entre os cards do carrossel */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1); /* Sombra mais forte para destacar */
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.08); /* Sutil aumento de tamanho */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Sombra mais forte ao passar o mouse */
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain; /* Ajusta a imagem para caber no contêiner sem cortes ou distorções */
  object-position: center; /* Centraliza a imagem no contêiner */
`;

const ProductName = styled.p` /* Alterado de h3 para p */
  margin: 10px 0;
  font-size: 1.0rem;
  color: #444;

  /* Truncamento com limite de 2 linhas */
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limita a 2 linhas */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal; /* Permite quebra de linha */
  line-height: 1.2rem; /* Ajuste conforme o design */
  max-height: 2.4rem; /* Calculado como line-height * 2 */
`;

const ProductPrice = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color:#FFA500;
  margin-top: 0 auto;
`;

const CategoryTitle = styled.h2`
  width: 100%;
  font-size: 1.5rem;
  color: #444;
  margin-top: 40px;
  text-align: center;
  margin-bottom: 20px;
`;


const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  width: 100%;
  flex-direction: row;
  position: relative;
`;

const Carousel = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  gap: 20px;
  width: 90%;
  flex-wrap: nowrap;
  padding-bottom: 10px;

  & > a {
    flex-shrink: 0;
  }
`;

const Arrow = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.3s ease;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  &:hover {
    transform: scale(1.2) translateY(-50%);
  }
`;

const LeftArrow = styled(Arrow)`
  left: 10px;
`;

const RightArrow = styled(Arrow)`
  right: 10px;
`;

const Home = () => {
  const [produtos, setProdutos] = useState([]);
  const [carouselProducts, setCarouselProducts] = useState([]);
  const [unusedCategorias, setUnusedCategorias] = useState([]);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  useEffect(() => {
    // Mantém os produtos completos em cada categoria
    const categoriasAtualizadas = categorias.map((categoria) => ({
      ...categoria,
      products: [...categoria.products], // Sem limitar os produtos aqui
    }));
  
    setProdutos(categoriasAtualizadas);
  
    // Seleciona categorias principais com limite de 4 produtos para exibição
    const categoriasPrincipais = categoriasAtualizadas.slice(0, 2).map((categoria) => ({
      ...categoria,
      products: categoria.products.slice(0, 4), // Limita aqui apenas para a exibição
    }));
  
    const categoriasRestantes = categoriasAtualizadas.slice(2);
  
    setProdutos([...categoriasPrincipais, ...categoriasRestantes]);
    setUnusedCategorias(categoriasRestantes);
  
    // Configura o carrossel para coletar até 8 produtos
    if (categoriasRestantes.length > 0) {
      const categoriaCarrossel = categoriasRestantes[0];
      setCarouselProducts(categoriaCarrossel.products.slice(0, 8));
      setUnusedCategorias(categoriasRestantes.slice(1));
    }
  }, []);
  

  const handleScroll = (direction) => {
    const container = document.getElementById("carousel");
    const scrollAmount = 220;

    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const updateArrows = () => {
    const container = document.getElementById("carousel");
    const scrollLeft = container.scrollLeft;
    const scrollWidth = container.scrollWidth - container.clientWidth;

    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth);
  };

  return (
    <>
      <BannerCarousel />
      <div>
        {/* Exibindo categorias principais */}
        {produtos.slice(0, 2).map((categoria, index) => (
          <CategoryContainer key={index}>
            <HomeContainer>
              {categoria.products.map((product) => (
                <ProductCard
                  to={`/product/${product.id}`}
                  key={product.id}
                  state={product}
                >
                  {/* Topo do card: imagem */}
                  <ProductCardTop>
                    <ProductImage src={product.image} alt={product.name} />
                  </ProductCardTop>

                  {/* Fundo do card: informações do produto */}
                  <ProductCardBottom>
                    <ProductName>{product.name}</ProductName>
                    <ProductPrice>R$ {product.price.toFixed(2)}</ProductPrice>
                  </ProductCardBottom>
                </ProductCard>
              ))}
            </HomeContainer>
          </CategoryContainer>
        ))}

        {/* Carrossel de Produtos */}
        {carouselProducts.length > 0 && (
          <CategoryContainer>
            <CategoryTitle>Exclusivos Selecionados para Você!</CategoryTitle>
            <CarouselContainer>
              {showLeftArrow && (
                <LeftArrow onClick={() => handleScroll("left")}>&#8592;</LeftArrow>
              )}
             <Carousel id="carousel" onScroll={updateArrows}>
              {carouselProducts.map((product) => (
                <CarouselCard
                  to={`/product/${product.id}`}
                  key={product.id}
                  state={product}
                >
                  {/* Topo do card: imagem */}
                  <ProductCardTop>
                    <ProductImage src={product.image} alt={product.name} />
                  </ProductCardTop>

                  {/* Fundo do card: informações do produto */}
                  <ProductCardBottom>
                    <ProductName>{product.name}</ProductName>
                    <ProductPrice>R$ {product.price.toFixed(2)}</ProductPrice>
                  </ProductCardBottom>
                </CarouselCard>
              ))}
            </Carousel>

              {showRightArrow && (
                <RightArrow onClick={() => handleScroll("right")}>&#8594;</RightArrow>
              )}
            </CarouselContainer>
          </CategoryContainer>
        )}

     {/* Exibindo categorias restantes */}
      {unusedCategorias.map((categoria, index) => (
        <CategoryContainer key={index}>
          <HomeContainer>
            {categoria.products.slice(0, 4).map((product) => ( // Limita a exibição a 4 produtos
              <ProductCard
                to={`/product/${product.id}`}
                key={product.id}
                state={product}
              >
                {/* Topo do card: imagem */}
                <ProductCardTop>
                  <ProductImage src={product.image} alt={product.name} />
                </ProductCardTop>

                {/* Fundo do card: informações do produto */}
                <ProductCardBottom>
                  <ProductName>{product.name}</ProductName>
                  <ProductPrice>R$ {product.price.toFixed(2)}</ProductPrice>
                </ProductCardBottom>
              </ProductCard>
            ))}
          </HomeContainer>
        </CategoryContainer>
      ))}
      </div>
    </>
  );
};

export default Home;
