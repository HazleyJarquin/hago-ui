import type { Meta, StoryObj } from "@storybook/react";
import { StyleSheet, View } from "react-native";
import React from "react";
import { InfoBanner } from "../../components/InfoBanner";
import { Text } from "react-native-paper";

const meta = {
  title: "Components/InfoBanner",
  component: InfoBanner,
  decorators: [
    (Story) => (
      <View style={styles.centered}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof InfoBanner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Content: Story = {
  args: {
    children: <Text>Hi</Text>,
    variant: "secondary",
    infoBannerStyle: { padding: 10 },
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "tertiary"],
    },
  },
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
