import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TextInputProps,
  StyleProp,
  TextStyle,
} from "react-native";
import { Text } from "react-native-paper";
import { colors } from "../../theme";

interface InputProps extends TextInputProps {
  borderColor?: string;
  borderRadius?: number;
  backgroundColor?: string;
  textColor?: string;
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
  asterisk?: boolean;
}

export const Input = ({
  borderColor = colors.primary["700"],
  borderRadius = 10,
  backgroundColor = "#f9f9f9",
  textColor = "#333",
  style,
  label,
  labelStyle,
  asterisk = false,
  ...rest
}: InputProps) => {
  return (
    <View style={{ justifyContent: "flex-start", gap: 5 }}>
      {label && (
        <View style={{ flexDirection: "row", gap: 2, alignItems: "center" }}>
          <Text style={labelStyle}>{label}</Text>
          {asterisk && <Text style={{ color: colors.error["500"] }}>*</Text>}
        </View>
      )}
      <View
        style={[
          styles.container,
          { borderColor, borderRadius, backgroundColor },
        ]}
      >
        <TextInput
          style={[styles.input, { color: textColor }, style]}
          {...rest}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  input: {
    fontSize: 16,
    paddingVertical: 6,
    paddingHorizontal: 8,
    letterSpacing: 0.5,
  },
});
