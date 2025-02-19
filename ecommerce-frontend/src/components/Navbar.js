import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import logoImage from "../incones/logo.jpg";
import { useCart } from "../context/CartContext";
import { categorias } from "../pages/produtos";


// Estilizando a barra de pesquisa
const NavbarContainer = styled.nav`
  background-color: #FFA500;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  position: relative;

    @media (max-width: 768px) {
    justify-content: center; /* Centraliza logo e input */
    gap: 10px; /* Espaçamento entre logo e input */
  }
`;

const Logo = styled(Link)`
  text-decoration: none;
  width: 60px;
  height: 60px;
  background-image: url(${logoImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-left: 10px;
`;


const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

   @media (max-width: 1024px) {
    min-width: 350px; /* Ajuste da largura mínima para telas de tablet e notebook */
  }

  @media (max-width: 768px) {
    width: 100%; /* Garantindo que no mobile, o contêiner ocupe toda a largura */
    justify-content: center; /* Alinha o input ao centro */
  }
`;

const SearchInput = styled.input`
  height: 40px;
  width: 500px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding-left: 10px;
  padding-right: 40px;
  font-size: 14px;
  color: #333;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border: 2px solid #444;
  }


  @media (max-width: 768px) {
    width: 100%; /* Largura ajustada para dispositivos móveis */
  }
`;

const SearchIcon = styled(FaSearch)`
  position: absolute;
  right: 25px;
  top: 50%;
  transform: translateY(-50%);
  color: #333;
  cursor: pointer;
  z-index: 2;
`;

const SearchResultsContainer = styled.div`
  position: absolute;
  top: 50px;
  width: 500px;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  max-height: 300px;
  overflow-y: auto;
  z-index: 100;
  border-radius: 5px;

   @media (max-width: 768px) {
    width: calc(100% - 20px); /* Ajusta a largura para ocupar 100% da tela, considerando 10px de cada lado */
    left: 10px; 
    right: 10px; 
  }
`;

const SearchResultItem = styled.div`
  padding: 10px;
  cursor: pointer;
  color: #111;
  &:hover {
    background-color:rgb(245, 245, 245);
  }
`;

const SearchDivider = styled.div`
  border-left: 1px solid #ccc;
  height: 20px;
  margin-right: 10px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.div`
  background-color: white;
  color: #333;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  user-select: none;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: white;
  min-width: 150px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 10;
  border-radius: 5px;
  overflow: hidden;

  ${DropdownContainer}:hover & {
    display: block;
  }
`;

const DropdownOption = styled.div`
  padding: 10px;
  text-align: left;
  color: #333;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const IconLink = styled(Link)`
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 18px;
`;

const CartBadge = styled.span`
 background-color: #E07B00;
  color: white;
  border-radius: 50%;
  padding: 4px 8px;
  font-size: 12px;
  margin-left: 5px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
  margin-left: 0px; /* Para garantir o espaço entre o link e a imagem */
`;

const Navbar = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const [searchQuery, setSearchQuery] = useState(""); // Estado da pesquisa
  const [searchResults, setSearchResults] = useState([]); // Resultados da pesquisa

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    filterProducts(query);
  };

  // Filtra os produtos por nome ou categoria
  const filterProducts = (query) => {
    if (query.trim() === "") {
      setSearchResults([]);
      return;
    }
    const results = [];
    categorias.forEach((category) => {
      const filteredProducts = category.products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      if (filteredProducts.length > 0) {
        results.push(...filteredProducts.map((product) => ({
          ...product,
          category: category.name
        })));
      }
    });
    setSearchResults(results);
  };

  const handleCategoryClick = (category) => {
    navigate(`/category/${category}`);
  };

  const handleSearchResultClick = (item) => {
    setSearchQuery(item.name); // Atualiza o valor do input
    setSearchResults([]); // Fecha os resultados da pesquisa
    navigate(`/category/${item.category}`); // Navega para a categoria
  };

  return (
    <NavbarContainer>
      <Logo to="/" />
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Pesquisar..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <SearchDivider />
        <SearchIcon />
        {searchResults.length > 0 && (
          <SearchResultsContainer>
            {searchResults.map((item, index) => (
              <SearchResultItem key={index} onClick={() => handleSearchResultClick(item)}>
                {item.name} - {item.category}
              </SearchResultItem>
            ))}
          </SearchResultsContainer>
        )}
      </SearchContainer>
      <NavLinks>
        <DropdownContainer>
          <DropdownButton>
            Categorias
            <MdKeyboardArrowDown />
          </DropdownButton>
          <DropdownContent>
            <DropdownOption onClick={() => handleCategoryClick("Modas")}>Modas</DropdownOption>
            <DropdownOption onClick={() => handleCategoryClick("Eletrônicos")}>Eletrônicos</DropdownOption>
            <DropdownOption onClick={() => handleCategoryClick("Beleza")}>Beleza</DropdownOption>
            <DropdownOption onClick={() => handleCategoryClick("Móveis")}>Móveis</DropdownOption>
            <DropdownOption onClick={() => handleCategoryClick("Automóveis")}>Automóveis</DropdownOption>
          </DropdownContent>
        </DropdownContainer>
        <IconLink to="/cart">
          <FaShoppingCart />
          Carrinho
          {totalItems > 0 && <CartBadge>{totalItems}</CartBadge>}
        </IconLink>
        <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>
          Contato
        </Link>
        {/* Transformando a imagem em um link */}
          <Link to="/profile">
          <ProfileImage
            src="https://cdn-icons-png.flaticon.com/512/14105/14105842.png"
            alt="Perfil do usuário"
          />
        </Link>
   </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
