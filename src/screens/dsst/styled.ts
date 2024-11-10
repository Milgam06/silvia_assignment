import { StyleSheet } from "react-native";

export const TestViewStyle = StyleSheet.create({
  keyAndImageContainer: {
    flex: 0.6,
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
    borderWidth: 0.6,
  },

  questionKeyContainer: {
    flex: 0.6,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#f5ebe0",
  },
  answerContainer: {
    flex: 1,
    backgroundColor: "#f5ebe0",
  },
  answerView: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    margin: 4,
  },
});
