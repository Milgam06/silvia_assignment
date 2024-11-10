import { StyleSheet } from "react-native";

export const QuestionBoxStyle = StyleSheet.create({
  containerView: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#bcb8b1",
    borderRadius: 10,
  },
  numberView: {
    flex: 0.5,
    width: "70%",
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#000",
    borderBottomWidth: 1,
  },
  answerView: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
});
