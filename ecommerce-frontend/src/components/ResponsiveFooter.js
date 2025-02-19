import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaHome, FaShoppingCart, FaBell } from "react-icons/fa"; // Atualizado para importar o FaBell
import { useCart } from "../context/CartContext"; // Importando o hook useCart para acessar o carrinho

const FooterContainer = styled.footer`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: ${(props) => (props.scroll ? "#ffffff" : "#FFA500")};
    color: ${(props) => (props.scroll ? "#888" : "white")};
    align-items: center;
    justify-content: space-around;
    padding: 0 10px;
    z-index: 1000;
    transition: background-color 0.6s, color 0.3s;
  }
`;

const FooterIconLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 30px;
  position: relative; /* Adiciona o position relativo para permitir o badge flutuar sobre o ícone */

  &:hover {
    color: #E07B00;
  }
`;

const FooterProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;

const FooterText = styled.span`
  font-size: 10px;
  color: inherit;
`;

const CartBadge = styled.div`
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: #E07B00;
  color: white;
  border-radius: 50%;
  padding: 5px;
  font-size: 12px;
  font-weight: bold;
`;

const ResponsiveFooter = () => {
  const { cartItems } = useCart(); // Obtendo os itens do carrinho do contexto
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Contando o total de itens no carrinho
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <FooterContainer scroll={scroll}>
      {/* Ícone de Início */}
      <FooterIconLink to="/">
        <FaHome />
        <FooterText>Início</FooterText>
      </FooterIconLink>

      {/* Ícone de Notificações */}
      <FooterIconLink to="/noticias">
        <FaBell />
        <FooterText>Notificações</FooterText>
      </FooterIconLink>

      {/* Ícone de Carrinho */}
      <FooterIconLink to="/cart">
        <FaShoppingCart />
        <FooterText>Carrinho</FooterText>
        {totalItems > 0 && <CartBadge>{totalItems}</CartBadge>} {/* Exibe o número de itens no carrinho */}
      </FooterIconLink>

      {/* Foto de perfil */}
      <FooterIconLink to="/profile">
        <FooterProfileImage 
          src="https://cdn-icons-png.flaticon.com/512/14105/14105842.png" 
          alt="Perfil do usuário" 
        />
        <FooterText>Eu</FooterText>
      </FooterIconLink>
    </FooterContainer>
  );
};

export default ResponsiveFooter;
