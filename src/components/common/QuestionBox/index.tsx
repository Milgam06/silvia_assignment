import { View, Text } from "react-native";

import { TextStyle } from "@/components";

import { QuestionBoxStyle } from "./styled";

interface QuestionBoxProps {
  questionNumber: number;
  answering?: number;
}

export const QuestionBox: React.FC<QuestionBoxProps> = ({
  questionNumber,
  answering,
}) => {
  return (
    <View style={QuestionBoxStyle.containerView}>
      <View style={QuestionBoxStyle.numberView}>
        <Text style={TextStyle.test}>{questionNumber}</Text>
      </View>
      <View style={QuestionBoxStyle.answerView}>
        <Text>{answering}</Text>
      </View>
    </View>
  );
};
