import { StyleSheet } from 'react-native';
import { defaultColors } from '../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: defaultColors.white,
  },
  logo: {
    width: 300,
    height: 300,
  }
});
