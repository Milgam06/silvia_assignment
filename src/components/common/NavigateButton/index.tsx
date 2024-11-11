import { View, TouchableOpacity, Text } from "react-native";

import { TextStyle } from "@/components";

import { NavigateButtonStyles } from "./styled";

interface NavigateButtonProps {
  buttonText: string;
  onPress: () => void;
}

export const NavigateButton: React.FC<NavigateButtonProps> = ({
  buttonText,
  onPress,
}) => {
  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <View style={NavigateButtonStyles.ButtonView}>
          <Text style={TextStyle.buttonText}>{buttonText}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};
