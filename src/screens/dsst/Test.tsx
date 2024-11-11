import { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";

import { TextStyle, QuestionBox, QuestionBoxProps } from "@/components";
import { KEY_IMAGE } from "@/constants";
import { randomization } from "@/utils";
import { TestStore } from "@/stores";

import { TestViewStyle } from "./styled";

export const Test: React.FC = () => {
  const navigation = useNavigation();

  // 랜덤 숫자 리스트 생성 (1부터 9까지의 숫자 중 15개의 랜덤 숫자 리스트)
  const { randomNumList } = randomization();
  const questionList = randomNumList(1, 9, 15);

  const [currentStep, setCurrentStep] = useState<number>(0);
  const [question, setQuestion] = useState<number>(questionList[currentStep]);
  const [answer, setAnswer] = useState<QuestionBoxProps | null>(null);
  const [isAnswering, setIsAnswering] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean | undefined>(undefined);
  const [stepReactTime, setStepReactTime] = useState<number | null>(null);

  // 각 step 시작 시 트리거
  useEffect(() => {
    // Test 완료 시 Report 화면으로 이동
    if (currentStep >= questionList.length) {
      navigation.navigate("Report");
      return;
    }
    // 각 Step 당 state 변경
    setQuestion(questionList[currentStep]);
    setStepReactTime(new Date().getTime());
    setIsCorrect(undefined);
  }, [currentStep]);

  // 정답 선택 핸들러
  const onAnswerHandler = (selectedAnswer: QuestionBoxProps) => {
    // 중복 클릭 방지
    if (isAnswering) return;

    setIsAnswering(true);
    setAnswer(selectedAnswer);

    // 반응 시간 계산
    const reactionTime = stepReactTime
      ? (new Date().getTime() - stepReactTime) / 1000
      : 0;

    // 정답 여부 판별
    const correct = selectedAnswer.questionNumber === question;
    setIsCorrect(correct);

    // TestStore에 StepData 추가
    TestStore.addStepData({
      stepQuestion: question,
      questionAnswer: selectedAnswer.questionNumber,
      isCorrect: selectedAnswer.questionNumber === question,
      reactionTime: reactionTime,
    });

    // 0.6초 후, 다음 Step 이동
    setTimeout(() => {
      setCurrentStep((prevStep) => prevStep + 1);
      setAnswer(null);
      setIsAnswering(false);
    }, 600);
  };

  return (
    <>
      <View style={TestViewStyle.keyAndImageContainer}>
        {KEY_IMAGE.map((item, i) => (
          <View key={i} style={TestViewStyle.keyAndImageView}>
            <View style={{ borderBottomWidth: 1 }}>
              <Text style={TextStyle.testKey}>{i + 1}</Text>
            </View>
            <FontAwesomeIcon icon={item.image} size={30} />
          </View>
        ))}
      </View>

      <View style={TestViewStyle.questionKeyContainer}>
        <QuestionBox
          questionNumber={question}
          answering={answer?.answering}
          isCorrect={isCorrect}
        />
      </View>

      {/* FlatList로 KEY_IMAGE data 3x3 배열 배치 */}
      <FlatList
        style={TestViewStyle.answerContainer}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
          flexGrow: 1,
        }}
        scrollEnabled={false}
        data={KEY_IMAGE}
        renderItem={({ item }) => (
          <TouchableOpacity
            disabled={isAnswering}
            onPress={() =>
              onAnswerHandler({
                questionNumber: item.key,
                answering: item.image,
              })
            }
          >
            <View style={TestViewStyle.answerView}>
              <FontAwesomeIcon icon={item.image} size={30} />
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => `${item.key}`}
        numColumns={3}
      />
    </>
  );
};
