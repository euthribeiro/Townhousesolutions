import { StyleSheet } from "react-native";
import { defaultColors } from "../../styles";


export default StyleSheet.create({
  container:{
      justifyContent: 'center',
      alignItems: 'center'
  },
  button:{
      width:'100%',
      height:54,
      alignItems:'center',
      paddingLeft:35,
      paddingRight:35,
      fontSize: 12,
  },
  title:{
      fontSize: 15,
      fontWeight:'bold',
      color: defaultColors.dark,
      marginLeft: 15,
  },
  rowTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemActive:{
      fontSize: 12,
      color: defaultColors.primary,
  },
  itemInActive:{
      fontSize: 12,
      color: defaultColors.dark,
  },
  btnActive:{
      borderColor: defaultColors.primary,
  },
  btnInActive:{
      borderColor: defaultColors.dark,
  },
  row:{
      flexDirection: 'row',
      justifyContent:'space-between',
      height:56,
      paddingLeft:15,
      paddingRight:18,
      alignItems:'center',
      backgroundColor: defaultColors.light,
  },
  childRow:{
      flexDirection: 'row',
      justifyContent:'space-between',
      backgroundColor: defaultColors.light,
  },
  parentHr:{
      height:1,
      color: defaultColors.white,
      width:'100%'
  },
  childHr:{
      height:1,
      backgroundColor: defaultColors.light,
      width:'100%',
  },
  colorActive:{
      borderColor: defaultColors.dark,
  },
  colorInActive:{
      borderColor: defaultColors.dark,
  }
});
