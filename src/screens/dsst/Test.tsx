import { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import { TextStyle, QuestionBox, QuestionBoxProps } from "@/components";
import { KEY_IMAGE } from "@/constants";

import { TestViewStyle } from "./styled";

export const Test: React.FC = () => {
  // answer state 추가
  const [answer, setAnswer] = useState<QuestionBoxProps>();

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
        <QuestionBox questionNumber={1} answering={answer?.answering} />
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
            onPress={() =>
              setAnswer({ questionNumber: item.key, answering: item.image })
            }
          >
            <View style={TestViewStyle.answerView}>
              <FontAwesomeIcon icon={item.image} size={30} />
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(index) => `${index}`}
        numColumns={3}
      />
    </>
  );
};
