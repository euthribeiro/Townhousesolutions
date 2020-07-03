import Styled from 'styled-components';
import { StyleSheet } from 'react-native';
import { defaultColors } from '../../../../styles';

export const Container = Styled.View`
  width: 100%;
  min-height: 60px;
  background-color: ${defaultColors.primary};
  flex-direction: row;
  align-items: center;
`;

export default StyleSheet.create({
  title: {
    color: defaultColors.white,
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
  },
  button: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    color: defaultColors.white,
    fontSize: 25,
  }
})
