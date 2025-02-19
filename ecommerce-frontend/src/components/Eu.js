import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaArrowLeft, FaEdit } from "react-icons/fa";
import { AiFillCaretLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';




// Estilizando o container principal da página
const PageContainer = styled.div`
  background-color: #f5f5f5;
  min-height: 100vh;
  padding: 20px;

  @media (max-width: 768px) {
     margin-bottom: 70px;
  }
`;

// Estilizando o cabeçalho
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #FFA500;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const BackButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer; /* Torna o container clicável */
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 15px;
  position: relative;
`;

const EditIcon = styled(FaEdit)`
  position: absolute;
  bottom: 5px;
  right: 5px;
  color: white;
  font-size: 20px;
  cursor: pointer;
`;

const Username = styled.h2`
  font-size: 22px;
  color: white;
  font-weight: bold;
`;

// Estilizando o quadro das compras
const PurchasesContainer = styled.div`
  background-color: white;
  margin-top: 20px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const PurchasesHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const PurchasesTitle = styled.h3`
  font-size: 20px;
  color: #FFA500;
`;

const HistoryTitle = styled.h3`
  font-size: 20px;
  color: #555;
`;

const Carousel = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 5px;
  margin-bottom: 20px;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
`;

const Card = styled.div`
  background-color: #FFF;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 150px;
  padding: 10px;
  cursor: pointer;
  text-align: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  scroll-snap-align: start;
  margin-right: 15px;
  position: relative;

  &:not(:last-child) {
    border-bottom: 1px solid #ddd;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100px;
  object-fit: contain;
  object-position: 
  border-radius: 10px;
`;

const CardDetails = styled.p`
  font-size: 14px;
  color: #555;
  margin-top: 10px;
  display: -webkit-box;
  -webkit-line-clamp: 2;  // Limita a 2 linhas
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;  // Adiciona os três pontinhos
`;

const StatusIconsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const StatusIcon = styled.div`
  text-align: center;
`;

const StatusText = styled.p`
  font-size: 12px;
  color: #333;
`;

const Icon = styled.div`
  font-size: 20px;
  color: #FFA500;
`;

// Estilizando o quadro "Minha Carteira"
const WalletContainer = styled.div`
  background-color: white;
  margin-top: 20px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const WalletHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const WalletTitle = styled.h3`
  font-size: 20px;
  color: #FFA500;
`;

const WalletIconsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 15px;
`;

const WalletIcon = styled.div`
  text-align: center;
`;

const WalletIconImage = styled.div`
  font-size: 30px;
  color: #FFA500;
`;

const WalletIconName = styled.p`
  font-size: 14px;
  color: #333;
`;

const ActivateButton = styled.button`
  background-color: transparent;
  border: 1px solid #FFA500;
  color: #FFA500;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
  margin-top: 5px;
  cursor: pointer;
`;

const LinkText = styled.a`
  font-size: 14px;
  color: #FFA500;
  cursor: pointer;
  text-decoration: none;
`;

const Eu = () => {
  const navigate = useNavigate();
  const [history, setHistory] = useState([]);

  // Carrega o histórico do localStorage
  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem("navigationHistory")) || [];
    setHistory(storedHistory);
  }, []);

  // Redireciona para a página do produto
  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: product }); // Rota e estado do produto
  };

  const handleBackClick = () => {
    navigate(-1); // Voltar para a página anterior
  };

  const handleProfileClick = () => {
    navigate('./perfil', { replace: true }); // Isso garante uma navegação relativa
  };
  
  return (
    <PageContainer>
      <Header>
        <BackButton onClick={handleBackClick}>
          <AiFillCaretLeft /> Voltar
        </BackButton>

        <ProfileContainer>
        <Link to="/perfil" style={{ display: 'flex', alignItems: 'center' }}>
          <ProfileImage
            src="https://cdn-icons-png.flaticon.com/512/14105/14105842.png"
            alt="Imagem de perfil"
          />
          <Username>João Silva</Username>
          <EditIcon />
        </Link>
      </ProfileContainer>

      </Header>

      <PurchasesContainer>
        <PurchasesHeader>
          <PurchasesTitle>Produtos vizualizados</PurchasesTitle>
          <HistoryTitle>Histórico</HistoryTitle>
        </PurchasesHeader>

       {/* Carrossel de histórico */}
       <Carousel>
          {history.length > 0 ? (
            history.map((product, index) => (
              <Card key={index} onClick={() => handleProductClick(product)}>
                <CardImage src={product.image} alt={product.name} />
                <CardDetails>{product.name}</CardDetails>
              </Card>
            ))
          ) : (
            <p>Você ainda não visualizou nenhum produto.</p>
          )}
        </Carousel>

        <StatusIconsContainer>
          <StatusIcon>
            <Icon>💰</Icon>
            <StatusText>A Pagar</StatusText>
          </StatusIcon>
          <StatusIcon>
            <Icon>⏳</Icon>
            <StatusText>Preparando</StatusText>
          </StatusIcon>
          <StatusIcon>
            <Icon>🚚</Icon>
            <StatusText>A Caminho</StatusText>
          </StatusIcon>
          <StatusIcon>
            <Icon>⭐</Icon>
            <StatusText>A Avaliar</StatusText>
          </StatusIcon>
        </StatusIconsContainer>
      </PurchasesContainer>

      <WalletContainer>
        <WalletHeader>
          <WalletTitle>Minha Carteira</WalletTitle>
        </WalletHeader>

        <WalletIconsContainer>
          <WalletIcon>
            <WalletIconImage>💳</WalletIconImage>
            <WalletIconName>ConectaPay</WalletIconName>
            <ActivateButton>Ativar</ActivateButton>
          </WalletIcon>
          <WalletIcon>
            <WalletIconImage>💸</WalletIconImage>
            <WalletIconName>SParcelado</WalletIconName>
            <LinkText href="#">Parcelado até R$ 4300 de limite</LinkText>          
          </WalletIcon>
          <WalletIcon>
            <WalletIconImage>💰</WalletIconImage>
            <WalletIconName>Moedas</WalletIconName>
            <LinkText href="#">Faça Check-in</LinkText>
          </WalletIcon>
          <WalletIcon>
            <WalletIconImage>🎫</WalletIconImage>
            <WalletIconName>Cupons</WalletIconName>
            <LinkText href="#">5 Cupons</LinkText>
          </WalletIcon>
        </WalletIconsContainer>
      </WalletContainer>
    </PageContainer>
  );
};

export default Eu;
