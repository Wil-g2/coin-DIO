import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  height: 60px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;

export const Text = styled.p`
  font-size: 2rem;
  font-weight: bold;
`;
