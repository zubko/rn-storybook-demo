import { Alert } from "react-native";
import { DashboardScreenView } from "./DashboardScreenView";
import { useNavigation } from "@react-navigation/native";
import { useHeaderRightButton } from "@app/core/navigation/useHeaderRightButton";
import { getAsset } from "@app/core/assets/getAsset";

const onHeaderPress = () => Alert.alert("show profile");

export const DashboardScreen = () => {
  const navigation = useNavigation();
  useHeaderRightButton({
    navigation,
    onPress: onHeaderPress,
    imageSource: getAsset("user"),
  });

  return (
    <DashboardScreenView
      onShowProfile={() => Alert.alert("show profile")}
      onStartQuiz={() => Alert.alert("start quiz")}
    />
  );
};
