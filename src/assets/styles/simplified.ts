import styled from "styled-components";

export const CounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Paragraph = styled.p`
  color: lightseagreen;
  font-weight: bold;
`;
export const ButtonGroup = styled.div`
  width: 10%;
  display: flex;
  flex-basis: border-box;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
export const Button = styled.button`
  cursor: pointer;
  color: lightseagreen;
  font-size: 24px;
  border: 2px solid lightseagreen;
  border-radius: 8px;
  padding: 12px 18px;
`;