import { DashboardScreen } from "@app/features/dashboard/screens/DashboardScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const HomeStack = createNativeStackNavigator();

export const HomeNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Dashboard" component={DashboardScreen} />
    </HomeStack.Navigator>
  );
};
