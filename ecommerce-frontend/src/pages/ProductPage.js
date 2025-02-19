import React, { useState, useEffect } from "react";  // Remover a duplicação da importação de React
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaArrowLeft, FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";

const ProductContainer = styled.div`
  background-color: #f7f9fc;
  color: #333;
  min-height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
   @media (max-width: 768px) {
    margin-bottom: 70px;
  }
`;

const Header = styled.header`
  background-color: #e0e0e0;
  padding: 10px 20px;
  display: flex;
  align-items: center;
`;

const HeaderBackButton = styled.button`
  background: none;
  border: none;
  color: #333;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    color: #ff5722;
  }
`;


const BackButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  background: #ff5722;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 16px;
  transition: background 0.3s ease;

  &:hover {
    background: #e64a19;
  }
`;

const ProductDetails = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 1000px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: 400px; /* Tamanho fixo para a imagem principal */
  margin: 0 auto;
  display: block;
  border-radius: 10px;
  object-fit: contain; /* Ajusta a imagem para caber no contêiner sem cortes ou distorções */
  object-position: center; /* Centraliza a imagem no contêiner */
`;

const ProductName = styled.h2`
  color: #ff5722;
  margin: 15px 0;
  font-size: 24px;
`;

const ProductPrice = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin: 10px 0;
`;

const ProductDescription = styled.p`
  color: #555;
  margin: 15px 0;
  font-size: 14px;
`;

const QuantitySelector = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 15px 0;

  span {
    font-size: 16px;
    font-weight: bold;
  }

  input {
    width: 60px;
    padding: 5px;
    text-align: center;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column; /* Alinha os botões um abaixo do outro */
  gap: 10px; /* Espaçamento entre os botões */
  width: 100%; /* Garante que ambos os botões ocupem toda a largura */
`;

const Button = styled.button`
  background: #ff5722;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: background 0.3s ease;

  &:hover {
    background: #e64a19;
  }
`;

const BuyButton = styled.button`
  background: #ff5722;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 15px 20px;
  font-size: 18px;
  cursor: pointer;
  width: 100%;
  margin-top: 30px;
  transition: background 0.3s ease;

  &:hover {
    background: #e64a19;
  }
`;

const ImageThumbnails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: 20px;

  img {
    width: 60px;
    height: 60px;
    cursor: pointer;
    border-radius: 5px;
    border: 2px solid transparent;
    transition: border 0.3s ease;

    &:hover {
      border: 2px solid #ff5722;
    }

    &.selected {
      border: 2px solid #e64a19;
    }
  }

  @media (max-width: 768px) {
    flex-direction: row; /* Alinha horizontalmente no mobile */
    justify-content: center;
    margin-top: 20px;
    width: 100%;
  }
`;

const ProductPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = location.state;
  const [quantity, setQuantity] = useState(1);
  const [currentImage, setCurrentImage] = useState(product.image);
  const [selectedImage, setSelectedImage] = useState(product.image);

  const handleQuantityChange = (e) => {
    const value = Math.max(1, parseInt(e.target.value) || 1);
    setQuantity(value);
  };
  

  useEffect(() => {
    const saveProductToLocalHistory = () => {
      const navigationHistory = JSON.parse(localStorage.getItem("navigationHistory")) || [];
      const updatedHistory = [product, ...navigationHistory.filter(item => item.id !== product.id)];
      localStorage.setItem("navigationHistory", JSON.stringify(updatedHistory));
    };
  
    saveProductToLocalHistory();
  }, [product]);
  

  const handleAddToCart = () => {
    addToCart(product, quantity);
    alert("Produto adicionado ao carrinho!");
  };

  const handleBackClick = () => {
    navigate(-1); // Volta para a página anterior
  };

  const handleMouseEnter = (image) => {
    setCurrentImage(image);
  };

  const handleImageClick = (image) => {
    setCurrentImage(image);
    setSelectedImage(image);
  };

  const handleBuyNow = () => {
    navigate("./pagamento"); // Redireciona para a página de pagamento
  };
  
  

  return (
    <>
      <Header>
        <HeaderBackButton onClick={handleBackClick}>
          <FaArrowLeft /> Voltar
        </HeaderBackButton>
      </Header>
      <ProductContainer>
        <ProductDetails>
          <ProductImage src={currentImage} alt={product.name} />
          <ImageThumbnails>
            {[product.image, ...product.detailImages].map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.name} detalhe ${index + 1}`}
                className={selectedImage === image ? "selected" : ""}
                onMouseEnter={() => handleMouseEnter(image)}
                onClick={() => handleImageClick(image)}
              />
            ))}
          </ImageThumbnails>
          <div>
            <ProductName>{product.name}</ProductName>
            <ProductPrice>R$ {(product.price * quantity).toFixed(2)}</ProductPrice>
            <ProductDescription>
              Aqui vai uma descrição dinâmica do produto. Detalhes adicionais podem ser
              adicionados.
            </ProductDescription>
            <QuantitySelector>
              <span>Quantidade:</span>
              <input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                min="1"
              />
            </QuantitySelector>
            <ButtonsContainer>
              <Button onClick={handleAddToCart}>
                <FaShoppingCart /> Adicionar ao Carrinho
              </Button>
              <BuyButton onClick={handleBuyNow}>COMPRE AGORA</BuyButton>
            </ButtonsContainer>
          </div>
        </ProductDetails>
      </ProductContainer>
    </>
  );
};
export default ProductPage;
