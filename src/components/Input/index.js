import React, { forwardRef } from 'react';
import { Container, Input } from './style';

const InputIcon = forwardRef((props, ref) => {
  const { containerStyle, ...inputProps } = props;

  return (
    <Container style={containerStyle}>
      {props.icon}
      <Input ref={ref} {...inputProps} autoCapitalize="none" />
      {props.children}
    </Container>
  );
});

export default InputIcon;

