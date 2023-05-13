import React from "react";
import styled from "styled-components";

export const Button = ({ onClick,bgColor, children,color }) => {
  return <MyButton onClick={onClick} color={color} bgColor={bgColor}>{children}</MyButton>;
};

const MyButton = styled.button`
width: 150px;
border-radius: 20px;
background-color: ${(p)=> p.bgColor};
color: ${(p)=> p.color};
font-size: 20px;
padding: 5px 10px;
font-weight: 600;
border: 1px solid ${(p)=> p.color};


&:hover{
  background-color: #d3d3d3;
  border: 1px solid black;
}
&:active{
  background-color: #978c8c;
  color: black;
}

`;
