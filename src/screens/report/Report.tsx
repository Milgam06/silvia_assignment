import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

import { TestStore } from "@/stores/TestStore";

import { ReportStyle } from "./styled";

export const Report: React.FC = () => {
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);
  const [averageReactionTime, setAverageReactionTime] = useState<number>(0);

  useEffect(() => {
    // TestStore에서 stepData를 가져옴
    const stepData = TestStore.stepData;

    // 맞춘 정답 개수 계산
    const correctCount = stepData.filter((step) => step.isCorrect).length;
    setCorrectAnswers(correctCount);

    // 평균 반응 시간 계산
    const totalReactionTime = stepData.reduce(
      (acc, step) => acc + step.reactionTime,
      0
    );
    const avgReactionTime =
      stepData.length > 0 ? totalReactionTime / stepData.length : 0;
    setAverageReactionTime(avgReactionTime);
  }, []);

  return (
    <View style={ReportStyle.container}>
      <Text style={ReportStyle.title}>Test Report</Text>
      <Text style={ReportStyle.info}>Correct Answers: {correctAnswers}</Text>
      <Text style={ReportStyle.info}>
        Average Reaction Time: {averageReactionTime.toFixed(1)} seconds
      </Text>
    </View>
  );
};
