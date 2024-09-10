import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../../theme";

interface CheckboxProps {
  checked: boolean;
  onPress: () => void;
  checkColor: string;
  borderColor?: string;
  backgroundColor?: string;
}

export const Checkbox = ({
  checked,
  onPress,
  checkColor,
  borderColor = "black",
  backgroundColor = "transparent",
}: CheckboxProps) => {
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.checkboxBase,
          checked && styles.checkboxChecked,
          { borderColor, backgroundColor },
        ]}
      >
        {checked && <MaterialIcons name="check" size={18} color={checkColor} />}
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  checkboxBase: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,

    justifyContent: "center",
    alignItems: "center",
  },
  checkboxChecked: {
    backgroundColor: "transparent",
  },
});
