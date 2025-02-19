import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Importando imagens locais
import Banner1 from "../assets/images/1600w-paTGOKamJ9A.webp";
import Banner2 from "../assets/images/bandeira-de-venda-em-massa-cartaz-de-venda_1302-8177.jpg";
import Banner3 from "../assets/images/D_NQ_870603-MLA81434420912_122024-OO.webp";

const CarouselContainer = styled.div`
  width: 100%;
  height: 300px;
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

const BannerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const banners = [Banner1, Banner2, Banner3]; // Usando imagens locais

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 3000); // Mudança de slide a cada 3 segundos

    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <CarouselContainer>
      <SlideWrapper style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {banners.map((banner, index) => (
          <Slide key={index}>
            <SlideImage src={banner} alt={`Banner ${index + 1}`} />
          </Slide>
        ))}
      </SlideWrapper>
      <NavigationDots>
        {banners.map((_, index) => (
          <Dot
            key={index}
            active={index === currentIndex}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </NavigationDots>
    </CarouselContainer>
  );
};

export default BannerCarousel;
