import React, { useEffect } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import {
  Portal,
  Modal as PaperModal,
  ModalProps as PaperModalProps,
  Text,
} from "react-native-paper";
import { colors } from "../../theme";
import { IconButton } from "../IconButton";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

export type ModalProps = PaperModalProps & {
  children: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  title?: string;
  onIconClosePress: () => void;
};

export const Modal = ({
  children,
  visible,
  containerStyle,
  title,
  onIconClosePress,
  ...props
}: ModalProps) => {
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0.9);

  useEffect(() => {
    opacity.value = withSpring(visible ? 1 : 0, {
      damping: 10,
      stiffness: 100,
    });
    scale.value = withSpring(visible ? 1 : 0.9, {
      damping: 10,
      stiffness: 100,
    });
  }, [visible]);

  const animatedContainerStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ scale: scale.value }],
  }));

  const combinedStyle: StyleProp<ViewStyle> = [
    { borderRadius: 8, padding: 20, backgroundColor: "white" },
    containerStyle,
  ];

  return (
    <Portal>
      <PaperModal
        visible={visible}
        contentContainerStyle={combinedStyle}
        {...props}
      >
        <Animated.View
          style={[styles.childrenContainer, animatedContainerStyle]}
        >
          {title && (
            <View
              style={{
                marginBottom: 20,
                borderBottomWidth: 1,
                borderBottomColor: colors.text["300"],
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "baseline",
              }}
            >
              <Text style={{ marginBottom: 10 }}>{title}</Text>
              <IconButton
                icon={"close"}
                onPress={onIconClosePress}
                variant="secondary"
                size={20}
                style={{ marginBottom: 10 }}
              />
            </View>
          )}
          {children}
        </Animated.View>
      </PaperModal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  childrenContainer: {
    justifyContent: "space-between",
  },
});
