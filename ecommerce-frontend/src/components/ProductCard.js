import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  width: 240px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 80%;
    height: auto;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin: 10px 0;
    color: #333;
  }

  p {
    font-size: 16px;
    color: #666;
  }
`;

const ProductCard = ({ product }) => {
  return (
    <Card to={`/product/${product.id}`}>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>R$ {product.price}</p>
    </Card>
  );
};

export default ProductCard;
