import { StyleSheet } from "react-native";

export const QuestionBoxStyle = StyleSheet.create({
  defaultContainerView: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 20,
  },
  correctContainerView: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 255, 0, 0.4)",
    borderRadius: 20,
  },
  wrongContainerView: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 0, 0, 0.4)",
    borderRadius: 20,
  },
  numberView: {
    flex: 1,
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#000",
    borderBottomWidth: 1,
  },
  answerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
