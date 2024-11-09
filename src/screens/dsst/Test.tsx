import { View, Text } from "react-native";

import { TextStyle } from "@/components";

import { TestViewStyle } from "./styled";

export const Test: React.FC = () => {
  return (
    <View style={TestViewStyle.screenContainer}>
      <Text style={TextStyle.default}>This is a test page</Text>
    </View>
  );
};
