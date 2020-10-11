import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 5,
    borderWidth: 1,
    padding: 15,
    marginBottom: 5,
  },
});

const TextInput = ({ style = {}, error, ...props }) => {
  const textStyle = {
    ...styles.textInput,
    ...style,
    borderColor: error ? theme.colors.error : theme.colors.textPrimary,
  };
  return <NativeTextInput style={textStyle} {...props} />;
};

export default TextInput;
