import Styled from 'styled-components';
import { StyleSheet } from 'react-native';
import { defaultColors } from '../../../../../../styles';

export const Container = Styled.View`
  width: 100%;
  min-height: 60px;
  background-color: ${defaultColors.primary};
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export default StyleSheet.create({
  button: {
    minWidth: 50,
    justifyContent:'center',
    alignItems: 'center'
  },
  icon: {
    fontSize: 25,
    color: defaultColors.white,
  },
  title: {
    fontSize: 18,
    color: defaultColors.white,
  }
});
