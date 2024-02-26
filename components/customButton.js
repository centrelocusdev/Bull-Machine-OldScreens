import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ onPress, title, buttonColor, textColor, paddingVertical, paddingHorizontal, borderRadius,borderColor, borderWidth , marginBottom }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor: buttonColor, paddingVertical, paddingHorizontal, borderRadius, borderWidth, borderColor, marginBottom }]}>
      <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomButton;
