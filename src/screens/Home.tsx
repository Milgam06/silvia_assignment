import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { TextStyle } from "@/components";

export const Home: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={TextStyle.default}>
        Open up App.tsx to start on your app!
      </Text>
      <Button title="Press ME" onPress={() => navigation.navigate("Test")} />
    </View>
  );
};
