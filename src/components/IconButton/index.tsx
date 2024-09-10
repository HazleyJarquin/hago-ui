import React from "react";
import {
  IconButton as PaperIconButton,
  IconButtonProps,
} from "react-native-paper";
import { colors } from "../../theme";
import { StyleProp, ViewStyle } from "react-native";

export type Props = IconButtonProps & {
  onPress: () => void;
  variant: "primary" | "secondary" | "tertiary";
  style?: StyleProp<ViewStyle>;
};

export const IconButton = ({ onPress, variant, style, ...props }: Props) => {
  const backgroundColor =
    variant === "primary"
      ? colors.primary["500"]
      : variant === "secondary"
      ? "none"
      : variant === "tertiary"
      ? "none"
      : "";

  const borderWidth = variant === "tertiary" ? 1 : 0;

  const borderColor = variant === "tertiary" ? colors.text["900"] : "none";

  const combinedIconButtonStyle: StyleProp<ViewStyle> = [
    { backgroundColor, borderWidth, borderColor, borderRadius: 8 },
    style,
  ];

  return (
    <PaperIconButton
      {...props}
      onPress={onPress}
      style={combinedIconButtonStyle}
    />
  );
};
