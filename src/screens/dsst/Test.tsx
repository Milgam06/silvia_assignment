import { View, Text } from "react-native";

import { TextStyle } from "@/components";

import { TestViewStyle } from "./styled";

export const Test: React.FC = () => {
  return (
    <>
      <View style={TestViewStyle.keyView}>
        <Text style={TextStyle.default}>This is a key view</Text>
      </View>
      <View style={TestViewStyle.questionKeyView}>
        <Text style={TextStyle.default}>This is a question key view</Text>
      </View>
      <View style={TestViewStyle.answerContainer}>
        <Text style={TextStyle.default}>This is a test page</Text>
      </View>
    </>
  );
};
