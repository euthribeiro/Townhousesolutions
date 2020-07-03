import React from 'react';
import { Button } from 'react-native-elements';

import styles from './style';

function ButtonLoad({ load, ...props }) {
  return (
    <Button
      containerStyle={styles.container}
      disabledStyle={styles.disabledStyle}
      disabled={load}
      loading={load}
      type={load ? 'clear' : 'solid'}
      {...props}
    />
  );
}

export default ButtonLoad;

