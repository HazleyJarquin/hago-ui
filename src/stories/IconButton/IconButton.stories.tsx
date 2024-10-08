import type { Meta, StoryObj } from "@storybook/react";
import { StyleSheet, View } from "react-native";

import React from "react";
import { IconButton } from "../../components/IconButton";

const meta = {
  title: "Components/IconButton",
  component: IconButton,
  decorators: [
    (Story) => (
      <View style={styles.centered}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Content: Story = {
  args: {
    onPress: () => alert("Pressed"),
    variant: "tertiary",
    icon: "plus",
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
