import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const cardRight = ({ current, closing }) => ({
  cardStyle: {
    transform: [
      {
        translateX: current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [width, 0],
        }),
      },
    ],
  },
});

const cardBottom = ({ current, closing }) => ({
  cardStyle: {
    translateY: current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [height, 0],
    }),
  },
});

export { cardRight, cardBottom };
