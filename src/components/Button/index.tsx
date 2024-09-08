import { StyleProp, ViewStyle, TextStyle } from "react-native";
import { ButtonProps, Button as PaperButton, Text } from "react-native-paper";
import { colors } from "../../theme";

export type Props = ButtonProps & {
  onPress: () => void;
  text: string;
  variant: "primary" | "secondary" | "tertiary";
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export const Button = ({
  onPress,
  text,
  variant = "primary",
  buttonStyle,
  textStyle,
  ...props
}: Props) => {
  const backgroundColor =
    variant === "primary" ? colors.primary["600"] : "none";

  const textColor = variant === "primary" ? "#fff" : colors.text["500"];
  const borderWidth = variant === "secondary" ? 1 : 0;
  const borderColor = variant === "secondary" ? colors.border["200"] : "none";
  const combinedStyle: StyleProp<ViewStyle> = [
    { backgroundColor, borderRadius: 8, borderWidth, borderColor },
    buttonStyle,
  ];
  const combinedTextStyle: StyleProp<ViewStyle> = [
    { color: textColor },
    textStyle,
  ];

  return (
    <PaperButton
      {...props}
      style={combinedStyle}
      onPress={onPress}
      children={<Text style={combinedTextStyle}>{text}</Text>}
    />
  );
};
