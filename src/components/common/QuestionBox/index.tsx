import React from "react";
import { View, Text } from "react-native";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import { TextStyle } from "@/components";

import { QuestionBoxStyle } from "./styled";

export interface QuestionBoxProps {
  questionNumber: number;
  answering?: IconDefinition;
}

export const QuestionBox: React.FC<QuestionBoxProps> = ({
  questionNumber,
  answering,
}) => {
  return (
    <View style={QuestionBoxStyle.containerView}>
      <View style={QuestionBoxStyle.numberView}>
        <Text style={TextStyle.questionBoxKey}>{questionNumber}</Text>
      </View>
      <View style={QuestionBoxStyle.answerView}>
        {answering && <FontAwesomeIcon icon={answering} size={60} />}
      </View>
    </View>
  );
};
