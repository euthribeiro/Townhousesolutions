import Styled from 'styled-components';
import { StyleSheet } from 'react-native';
import { defaultColors } from '../../../../../../styles';

export const Container = Styled.View`
  flex: 1;
  background-color: ${defaultColors.white};
  padding: 10px;
`;

export const Content = Styled.ScrollView.attrs({
  contentContainerStyle: {
    flewGrow: 1,
  }
})`
  width: 100%;
`;

export default StyleSheet.create({
  notificationController: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  closeBtn: {
    marginVertical: 10,
  },
  switch: {
    marginRight: 10,
  },
  textNotification: {
    fontSize: 17,
  }
});
