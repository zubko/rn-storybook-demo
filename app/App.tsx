import { NavigationContainer } from "@react-navigation/native";
import { HomeNavigator } from "./core/navigation/HomeStack";
import { useAuthStoreToken } from "./features/auth/store/authStore";
import { AuthNavigator } from "./features/auth/navigation/AuthNavigator";

export const App = () => {
  const token = useAuthStoreToken();
  return (
    <NavigationContainer>
      {token ? <HomeNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
