import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";
export type InfoBannerProps = {
  variant: "primary" | "secondary" | "tertiary";
  children: React.ReactNode;
  infoBannerStyle?: StyleProp<ViewStyle>;
  shadow?: boolean;
};

export const InfoBanner = ({
  variant,
  children,
  infoBannerStyle,
  shadow = false,
}: InfoBannerProps) => {
  const borderVariants =
    variant === "secondary" || variant === "primary" ? 0 : 1;

  const combinedStyle: StyleProp<ViewStyle> = [
    {
      borderBottomWidth: borderVariants,
      borderRadius: 8,
    },
    infoBannerStyle,
  ];

  return <View style={combinedStyle}>{children}</View>;
};
