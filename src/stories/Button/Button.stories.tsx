import type { Meta, StoryObj } from "@storybook/react";
import { StyleSheet, View } from "react-native";

import React from "react";
import { Button } from "../../components/Button";

const meta = {
  title: "Components/Button",
  component: Button,
  decorators: [
    (Story) => (
      <View style={styles.centered}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Content: Story = {
  args: {
    text: "Press me",
    onPress: () => alert("Pressed"),
    variant: "primary",
    children: undefined,
    buttonStyle: { width: 100 },
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
