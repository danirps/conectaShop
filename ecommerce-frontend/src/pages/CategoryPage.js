import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { categorias } from "./produtos"; // Banco de dados simulado

// Estilos reutilizados do Home
const Container = styled.div`
  padding: 20px;
`;

const CategoryTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const ProductGrid = styled.div`
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

const ProductCardTop = styled.div`
  flex: 2;
  overflow: hidden;
  border-bottom: 1px solid #ccc;
`;

const ProductCardBottom = styled.div`
  flex: 1;
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

const ProductImage = styled.img`
  width: 100%;
  height: 250px;
  border-radius: 10px;
   object-fit: contain; 
  object-position: center;
  
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
`;

// Estilos para o carrossel de banners
const CarouselContainer = styled.div`
  width: 100%;
  height: 340px;
  overflow: hidden;
  position: relative;

   @media (max-width: 768px) {
    height: 200px;;
  } 
`;

const SlideWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out; /* Transição suave */
  width: 100%;
  height: 100%;
`;

const Slide = styled.div`
  flex: 0 0 100%; /* Garante que cada slide ocupe 100% da largura do container */
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
`;

const NavigationDots = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#333" : "#ccc")};
  cursor: pointer;
`;

const CategoryPage = () => {
  const { categoryName } = useParams(); // Pega o nome da categoria da URL
  const category = categorias.find((cat) => cat.name.toLowerCase() === categoryName.toLowerCase());

  // Garantir que os hooks são sempre chamados
  const [currentIndex, setCurrentIndex] = useState(0);
  const categoryImages = category ? category.images.map((image) => image.image) : [];

  useEffect(() => {
    if (categoryImages.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % categoryImages.length);
      }, 3000); // Mudança de slide a cada 3 segundos

      return () => clearInterval(interval);
    }
  }, [categoryImages.length]);

  if (!category) {
    return <h1>Categoria não encontrada</h1>;
  }

  return (
    <>
      <CarouselContainer>
        <SlideWrapper style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {categoryImages.map((image, index) => (
            <Slide key={index}>
              <SlideImage src={image} alt={`Banner ${index + 1}`} />
            </Slide>
          ))}
        </SlideWrapper>
        <NavigationDots>
          {categoryImages.map((_, index) => (
            <Dot
              key={index}
              active={index === currentIndex}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </NavigationDots>
      </CarouselContainer>
      <Container>
  <CategoryTitle>{category.name}</CategoryTitle>
  <ProductGrid>
    {category.products.map((product) => (
      <ProductCard to={`/product/${product.id}`} key={product.id} state={product}>
        
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
  </ProductGrid>
</Container>

    </>
  );
};

export default CategoryPage;
