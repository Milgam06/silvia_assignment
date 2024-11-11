import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { TextStyle, NavigateButton } from "@/components";

import { HomeStyle } from "./styled";

export const Home: React.FC = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={HomeStyle.titleView}>
        <Text style={TextStyle.title}>인지검사 : DSST</Text>
      </View>
      <View style={HomeStyle.buttonContianer}>
        <NavigateButton
          buttonText="인지검사 시작"
          onPress={() => navigation.navigate("Test")}
        />
        <NavigateButton
          buttonText="마지막 검사 결과 확인"
          onPress={() => navigation.navigate("Report")}
        />
      </View>
    </>
  );
};
