import Styled from 'styled-components';
import Input from './Input';
import ButtonLoad from './ButtonLoad';
import { defaultColors } from '../styles';

const Container = Styled.View`
  flex: 1;
  background-color: ${defaultColors.white};
`;

const Content = Styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
  }
})`
  width: 100%;
`;

export const Body = Styled.View`
  flex: 1;
  padding: 10px;
`;

export { Input, ButtonLoad, Container, Content };
