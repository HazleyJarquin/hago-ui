import React, { useState } from "react";
import { View } from "react-native";
import { Modal } from "../../components/Modal";
import { Text } from "react-native-paper";
import { Button } from "../../components/Button";
interface ModalExampleProps {
  title: string;
}

export const ModalExample = ({ title }: ModalExampleProps) => {
  const [visible, setVisible] = useState(false);
  return (
    <View>
      {visible && (
        <Modal
          children={<Text>Hi</Text>}
          visible={visible}
          onDismiss={() => setVisible(false)}
          title={title}
          onIconClosePress={() => setVisible(false)}
        />
      )}

      <Button
        children
        onPress={() => setVisible(true)}
        text="Open"
        variant="tertiary"
      />
    </View>
  );
};
