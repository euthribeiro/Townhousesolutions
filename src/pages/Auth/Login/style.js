import { StyleSheet } from 'react-native';
import { defaultColors } from '../../../styles';


export default StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {

  },
  icon: {
    fontSize: 22,
    color: defaultColors.primary,
    marginHorizontal: 10,
  },
  input: {
    fontSize: 16,
    color: defaultColors.secundary
  },
  containerInputStyle: {
    marginVertical: 20,
  },
  buttonStyle: {
    width: '100%',
    backgroundColor: defaultColors.primary,
    marginTop: 20,
  },
  buttonRegStyle: {
    backgroundColor: defaultColors.secundary,
    marginTop: 20,
    width: '100%',
  },
  smallText: {
    fontSize: 14,
    marginTop: 20,
    textDecorationLine: 'underline',
    textDecorationColor: defaultColors.secundary,
  }
});
