import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

import { TestStore } from "@/stores/TestStore";
import { TextStyle } from "@/components";

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
    <>
      <View style={ReportStyle.titleView}>
        <Text style={ReportStyle.title}>테스트 결과</Text>
      </View>
      <View style={ReportStyle.infoContainer}>
        <Text style={TextStyle.reportInfo}>
          정답 갯수 :{" "}
          <Text
            style={
              correctAnswers > 7
                ? TextStyle.reportGoodData
                : TextStyle.reportBadData
            }
          >
            {correctAnswers}
          </Text>{" "}
          / 15
        </Text>
        <Text style={TextStyle.reportInfo}>
          평균 반응시간 :{" "}
          <Text
            style={
              Number(averageReactionTime.toFixed(1)) < 1
                ? TextStyle.reportGoodData
                : TextStyle.reportBadData
            }
          >
            {averageReactionTime.toFixed(1)}
          </Text>
          초
        </Text>
      </View>
    </>
  );
};
