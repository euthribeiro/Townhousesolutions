import Styled from 'styled-components';

export const Container = Styled.View`
  width: 100%;
  min-height: 50px;
  background-color: transparent;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border: 1px solid #000;
  border-radius: 5px;
`;

export const Input = Styled.TextInput`
  flex: 1;
`;
