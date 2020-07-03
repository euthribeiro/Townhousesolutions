import { StyleSheet } from "react-native";
import { defaultColors } from "../../../../styles";


export default StyleSheet.create({
  item: {
    padding: 10,
  },
  viewPDF: {
    height: 48,
    borderRadius: 3,
    width: '100%',
    backgroundColor: '#ccc',
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  pdfImage: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  viewPDFArcquive: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textArquivo: {
    fontSize: 14,
    fontWeight: 'bold',
    color: defaultColors.dark,
  },
  itemDescription: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: defaultColors.light,
    borderBottomWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  textDescription: {
    fontSize: 14,
    fontWeight: 'bold',
    color: defaultColors.dark,
  }
})
