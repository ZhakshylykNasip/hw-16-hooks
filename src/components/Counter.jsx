import React from "react";
import { useCounter } from "../hooks/counter";
import styled from "styled-components";
import { Button } from "../UI/Button";

export const Counter = () => {
  const custom = useCounter();
  return (
    <Container>
      <h1>{custom.count}</h1>

      <Block>
        <Button
        bgColor='violet'
        color="black"
        onClick={() => custom.decrement(2)}>-</Button>
        <Button
          bgColor="green"
          color="black"
          onClick={() => custom.increment(4)}
        >
          +
        </Button>
      </Block>
      <Button bgColor="red" onClick={() => custom.resetCount()}>
        reset{" "}
      </Button>
    </Container>
  );
};

const Container = styled.div`
margin: 0 auto;
  width: 400px;
  height: 300px;
  background-color: #2e2a2a84;
  color: white;
  text-shadow: 3px 0px 2px ;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  box-shadow: -3px 11px 19px 14px rgba(182, 186, 188, 0.2);
`;
const Block = styled.div`
  display: flex;
  gap: 20px;
`;
