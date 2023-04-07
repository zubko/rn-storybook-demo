import { Alert } from "react-native";
import { DashboardScreenView } from "./DashboardScreenView";

export const DashboardScreen = () => {
  return (
    <DashboardScreenView
      onShowProfile={() => Alert.alert("show profile")}
      onStartQuiz={() => Alert.alert("start quiz")}
    />
  );
};
