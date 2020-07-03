import { StyleSheet } from 'react-native';
import { defaultColors } from '../../../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: defaultColors.white,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  lottieView: {
    width: '100%',
    height: 300,
  },
  notificationText: {
    fontSize: 20,
    color: defaultColors.primary,
  }
});
