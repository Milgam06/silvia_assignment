import { StyleSheet } from "react-native";

export const TestViewStyle = StyleSheet.create({
  keyView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5ebe0",
  },
  keyAndImageView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderWidth: 0.8,
  },
  questionKeyView: {
    flex: 0.6,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    overflow: "hidden",
    backgroundColor: "#f5ebe0",
  },
  answerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5ebe0",
  },
});
