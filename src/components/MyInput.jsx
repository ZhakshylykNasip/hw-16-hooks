import React from "react";
import styled from "styled-components";
import { useInput } from "../hooks/input";
import { Button } from "../UI/Button";

const MyInput = () => {
  const email = useInput("", "email");
  const password = useInput("", "password");
  const date = useInput("", "date");

  const onValide = {
    email: email.validate,
    password: password.validate,
    date: date.validate,
  };

  return (
    <Container>
      <InputContainer>
        <label htmlFor="email">Email</label>
        <input
          size="small"
          type="email"
          id="email"
          value={email.value}
          onChange={email.onChange}
          onBlur={onValide.email}
        />
        <Button variant="outlined" color="success" onClick={onValide.email}>
          submit
        </Button>
        {email.error && <Error>{email.error}</Error>}
      </InputContainer>
      <InputContainer>
        <label htmlFor="password">Password</label>
        <input
          size="small"
          type="password"
          id="password"
          value={password.value}
          onChange={password.onChange}
          onBlur={onValide.password}
        />
        <Button variant="outlined" color="success" onClick={onValide.password}>
          submit
        </Button>
        {email.error && <Error>{password.error}</Error>}
      </InputContainer>
      <InputContainer>
        <label htmlFor="date">Date</label>
        <input
          size="small"
          type="date"
          id="date"
          value={date.value}
          onChange={date.onChange}
          onBlur={onValide.date}
        />
        <Button variant="outlined" color="success" onClick={onValide.date}>
          submit
        </Button>
        {email.error && <Error>{date.error}</Error>}
      </InputContainer>
    </Container>
  );
};

export default MyInput;

const Container = styled.div`
  display: grid;
  gap: 15px;
  text-align: center;
  border: 2px solid black;
  padding: 20px;
`;

const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 100px 450px 100px 450px;
  justify-content: center;
  gap: 20px;
`;

const Error = styled.span`
  color: red;
`;
