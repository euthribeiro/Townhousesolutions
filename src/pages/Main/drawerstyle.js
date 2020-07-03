import { StyleSheet, Dimensions } from 'react-native';
import { defaultColors } from '../../styles';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  row: {
    flexDirection: 'row'
  },
  viewProfile: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  profile: {
    width: 100,
    height: 100,
    borderRadius: 50,
    position: 'relative',
    left: width / 2 - 50,
    borderWidth: 3,
    borderColor: defaultColors.white,
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },
  icon: {
    fontSize: 35,
    color: defaultColors.white,
  },
  close: {
    minWidth: 60,
  },
  name: {
    fontSize: 18,
    color: defaultColors.white,
    textAlign: 'center'
  },
  email: {
    color: defaultColors.white,
    fontSize: 18,
    textAlign: 'center'
  },
  headerData: {
    marginVertical: 20,
  },
  label: {
    color: defaultColors.white,
    fontSize: 18,
  },
  item: {
    marginHorizontal: 20,
    minHeight: 60,
  },
  version: {
    fontSize: 12,
    color: defaultColors.white,
    textAlign: 'right',
    marginRight: 30,
  }
});
