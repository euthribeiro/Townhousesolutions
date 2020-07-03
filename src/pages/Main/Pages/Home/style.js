import { StyleSheet } from "react-native";
import { defaultColors } from "../../../../styles";


export default StyleSheet.create({
  container: {
  },
  box: {
    flex: 1,
    borderRadius: 8,
    overflow: 'hidden',
    marginVertical: 5,
    position: 'relative',
  },
  duo: {
    flexDirection: 'row',
    flex: 1,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  textForeground: {
    position: 'absolute',
    bottom: 0,
    paddingLeft: 15,
    paddingVertical: 1,
    color: defaultColors.primary,
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#fff8',
    width: '100%',
  },
  body: {
    flex: 1,
    padding: 10,
  }
})
