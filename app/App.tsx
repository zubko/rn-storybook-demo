import { NavigationContainer } from "@react-navigation/native";
import { HomeNavigator } from "./core/navigation/HomeStack";

export const App = () => {
  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  );
};
