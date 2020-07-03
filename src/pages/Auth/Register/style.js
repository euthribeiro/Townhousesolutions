import { StyleSheet } from "react-native";
import { defaultColors } from "../../../styles";


export default StyleSheet.create({
  logo: {
    width: 220,
    height: 100,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10,
  },
  icon: {
    fontSize: 22,
    color: defaultColors.primary,
    marginHorizontal: 10,
  },
  input: {
    fontSize: 16,
    color: defaultColors.secundary,
  },
  containerInputStyle: {
    marginVertical: 10,
  },
  content: {
    padding: 20,
  },
  buttonStyle: {
    width: '100%',
    backgroundColor: defaultColors.primary,
    marginTop: 10,
  },
  title: {
    fontSize: 19,
    color: defaultColors.secundary,
    textDecorationLine: 'underline',
    marginBottom: 10,
  }
});
