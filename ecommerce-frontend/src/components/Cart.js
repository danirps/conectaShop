import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useCart } from "../context/CartContext";
import { FaTrash, FaArrowLeft } from "react-icons/fa"; // Ícone de lixeira e setinha

const CartContainer = styled.div`
  padding: 20px;
  background: #f7f9fc;
  min-height: 100vh;
`;

const Header = styled.div`
  background-color: #d3d3d3;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: #333;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: 10px;

  &:hover {
    color: #e07b00;
  }
`;

const HeaderTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 10px 0;
  padding: 15px;
  cursor: pointer;
  position: relative;
  transition: transform 0.3s ease; /* Animação suave */

  &:hover {
    transform: scale(1.03); /* Hover mais suave */
  }
`;

const CartImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 20px;
  border-radius: 10px;
`;

const CartDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const CartName = styled.h4`
  font-size: 1.2rem;
  margin: 0;
`;

const CartPrice = styled.p`
  font-size: 1rem;
  color: #555;
`;

const CartQuantity = styled.span`
  font-size: 1rem;
  color: #333;
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  bottom: 10px;
  right: 10px;
  cursor: pointer;
  color: #ff5722;
  font-size: 20px;

  &:hover {
    color: #e64a19;
  }
`;

const EmptyCartMessage = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
  margin-top: 50px;
`;

const Cart = () => {
  const { cartItems, removeFromCart } = useCart(); // A função removeFromCart vem do contexto
  const navigate = useNavigate();

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: product });
  };

  const handleRemoveClick = (productId, e) => {
    e.stopPropagation(); // Impede o clique de propagar e acionar a navegação
    removeFromCart(productId); // Chama a função de remoção
  };

  const handleBackClick = () => {
    navigate(-1); // Volta para a página anterior
  };

  return (
    <CartContainer>
      {/* Cabeçalho */}
      <Header>
        <BackButton onClick={handleBackClick}>
          <FaArrowLeft /> {/* Ícone de setinha */}
          Voltar
        </BackButton>
        <HeaderTitle>Seu Carrinho</HeaderTitle>
      </Header>

      {/* Exibe a mensagem "O carrinho está vazio." ou os itens do carrinho */}
      {cartItems.length === 0 ? (
        <EmptyCartMessage>O carrinho está vazio.</EmptyCartMessage>
      ) : (
        cartItems.map((item) => (
          <CartItem key={item.id} onClick={() => handleProductClick(item)}>
            <CartImage src={item.image} alt={item.name} />
            <CartDetails>
              <CartName>{item.name}</CartName>
              <CartPrice>R$ {(item.price * item.quantity).toFixed(2)}</CartPrice>
              <CartQuantity>Quantidade: {item.quantity}</CartQuantity>
            </CartDetails>
            {/* Botão de remoção */}
            <RemoveButton onClick={(e) => handleRemoveClick(item.id, e)}>
              <FaTrash />
            </RemoveButton>
          </CartItem>
        ))
      )}
    </CartContainer>
  );
};

export default Cart;
