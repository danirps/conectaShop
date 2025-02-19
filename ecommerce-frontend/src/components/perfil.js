import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaChevronRight } from "react-icons/fa"; // Importando o ícone de seta

// Estilos
const PageContainer = styled.div`
   margin-bottom: 10px;
   
      @media (max-width: 768px) {
   margin-bottom: 70px;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0px;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  margin-right: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const OrangeBox = styled.div`
  background-color: orange;
  height: 300px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ProfileCircle = styled.div`
  background-color: #fff;
  border-radius: 50%;
  height: 100px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

const FieldContainer = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;

const Label = styled.div`
  font-size: 16px;
  font-weight: bold;
  width: 30%;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end; /* Alinha os itens ao final (canto direito) */
  width: 70%; /* Garante o espaço para os textos e ícones */
`;

const StaticText = styled.div`
  margin-right: 10px; /* Adiciona espaçamento entre o texto e o ícone */
  text-align: right; /* Alinha o texto à direita */
`;



const Input = styled.input`
  padding: 10px;
  width: calc(100% - 30px); /* Espaço para o ícone */
  border: none;
  background: none;
  text-align: right; /* Alinha o texto no lado direito */
  outline: none;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #aaa;
`;

const Line = styled.hr`
  margin-top: 20px;
  border: 1px solid #ddd;
`;

const OrangeLink = styled.a`
  color: orange;
  text-decoration: none;
  cursor: pointer;
  align-self: flex-start;
   padding: 0 10px;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
   text-align: left;
    padding: 0 10px;
`;

const Perfil = () => {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState(null);

  const handleBackClick = () => {
    navigate(-1); // Volta para a página anterior
  };

  const handleProfileImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  return (
    <PageContainer>
      {/* Cabeçalho */}
      <Header>
        <BackButton onClick={handleBackClick}>←</BackButton>
        <Title>Editar Perfil</Title>
      </Header>

      {/* Caixa Laranja */}
      <OrangeBox>
        <ProfileCircle>
          <ProfileImage
            src={profileImage || "https://cdn-icons-png.flaticon.com/512/14105/14105842.png"}
            alt="Imagem de perfil"
          />
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleProfileImageChange}
            id="profile-image-input"
          />
          <label htmlFor="profile-image-input" />
        </ProfileCircle>
      </OrangeBox>

      {/* Nome completo */}
      <FieldContainer>
        <Label>Nome Completo</Label>
        <InputContainer>
          <Input defaultValue="João Silva" />
          <IconButton>
            <FaChevronRight />
          </IconButton>
        </InputContainer>
      </FieldContainer>

      {/* Bio */}
      <FieldContainer>
        <Label>Bio</Label>
        <InputContainer>
          <Input defaultValue="Aqui vai uma breve descrição sobre você." />
          <IconButton>
            <FaChevronRight />
          </IconButton>
        </InputContainer>
      </FieldContainer>

      <Line />

      {/* Informações de Identidade */}
      <FieldContainer>
        <Label>Informações de Identidade</Label>
        <InputContainer>
          <div>CPF, Data de Nascimento</div>
          <IconButton>
            <FaChevronRight />
          </IconButton>
        </InputContainer>
      </FieldContainer>
      <OrangeLink href="#">Verificar Agora</OrangeLink>

      <Line />

      {/* Celular */}
      <InfoContainer>
        <Label>Celular</Label>
        <InputContainer>
          <div>*****62</div>
          <IconButton>
            <FaChevronRight />
          </IconButton>
        </InputContainer>
      </InfoContainer>

      <Line />

      {/* Email */}
      <InfoContainer>
        <Label>Email</Label>
        <InputContainer>
          <div>a*****E@gmail.com</div>
          <IconButton>
            <FaChevronRight />
          </IconButton>
        </InputContainer>
      </InfoContainer>
    </PageContainer>
  );
};

export default Perfil;
