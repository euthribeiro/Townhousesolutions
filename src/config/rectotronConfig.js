import Reactotron, {
  networking,
  openInEditor,
  trackGlobalErrors,
  asyncStorage,
} from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

const Tron = () => {
  if (__DEV__) {
    const tron = Reactotron.configure({
      name: 'Townhousesolutions',
    })
      .use(networking())
      .use(asyncStorage())
      .use(openInEditor())
      .use(networking())
      .use(sagaPlugin())
      .use(reactotronRedux())
      .useReactNative(trackGlobalErrors())
      .connect();

    tron.clear();
    console.tron = tron;
    return tron;
  }
  return {};
};

export default Tron();
