import Styled from 'styled-components';
import { TouchableOpacity , StyleSheet } from 'react-native';
import { defaultColors } from '../../../../styles';


export const Fab = Styled(TouchableOpacity).attrs({
  activeOpacity: 0.7,
})`
  width: 60px;
  height: 60px;
  background-color: ${defaultColors.primary};
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 20px;
  right: 15px;
`;

export default StyleSheet.create({
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: defaultColors.primary,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 20,
    paddingHorizontal: 5,
  },
  itemTitle: {
    fontSize: 17,
    textDecorationLine: 'underline'
  },
  itemDescription: {
    fontSize: 16,
    textAlign: 'justify'
  },
  itemStatus: {
    fontSize: 16,
    marginTop: 10,
  }
});
