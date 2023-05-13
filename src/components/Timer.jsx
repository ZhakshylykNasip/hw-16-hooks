
import React from "react";
import styled from "styled-components";
import { useInput } from "../hooks/input";
import useTimer from "../hooks/timer"
import { Button } from "../UI/Button";

const Timer = () => {
  const { value, onChange } = useInput(1);

  const { timer, startTimerHandler, stopTimerHandler, restartTimer ,activeTimer} =
    useTimer(value);

  return (
    <Container>
      <h1>{timer}</h1>
      <ButtonContainer>
      
        <Button bgColor={activeTimer ? 'red' : 'green'}  onClick={activeTimer ? stopTimerHandler : startTimerHandler }>
          {activeTimer ? 'stop' :'start' }
        </Button>
        <Button bgColor='gray'  onClick={restartTimer}>
          Restart
        </Button>
      </ButtonContainer>
      <input
        size="small"
        variant="outlined"
        type="number"
        min={1}
        value={value}
        onChange={onChange}
      />
    </Container>
  );
};

export default Timer;

const Container = styled.div`
  text-align: center;
  border: 2px solid black;
  width: 500px;
  height: 240px;
  border-radius: 20px;
  margin: 0 auto;
`;

const ButtonContainer = styled.div`
  margin-bottom: 20px;
`;