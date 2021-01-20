import React from "react";
import { RiCoinsFill } from "react-icons/ri";
import { Container, Text, Title } from "./styles";

const Card = ({ value, currency }) => {
  console.log("CARD", value, currency);
  return (
    <Container>
      <RiCoinsFill size={200} color="#F8A540" />
      <div>
        <Title>{currency}</Title>
        <Text>{parseFloat(value).toFixed(2)}</Text>
      </div>
    </Container>
  );
};

export default Card;
