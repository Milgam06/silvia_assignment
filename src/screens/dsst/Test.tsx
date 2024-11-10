import { useRef, useEffect } from "react";
import { View, Text, Animated } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import { TextStyle, QuestionBox } from "@/components";
import { KEY_IMAGE } from "@/constants";

import { TestViewStyle } from "./styled";

export const Test: React.FC = () => {
  return (
    <>
      <View style={TestViewStyle.keyView}>
        {KEY_IMAGE.map((item, i) => (
          <View style={TestViewStyle.keyAndImageView}>
            <View style={{ borderBottomWidth: 1 }}>
              <Text style={TextStyle.testKey}>{i + 1}</Text>
            </View>
            <FontAwesomeIcon icon={item.image} size={30} />
          </View>
        ))}
      </View>
      <View style={TestViewStyle.questionKeyView}>
        <QuestionBox questionNumber={1} answering="A" />
      </View>
      <View style={TestViewStyle.answerContainer}>
        <Text style={TextStyle.default}>This is a test page</Text>
      </View>
    </>
  );
};
