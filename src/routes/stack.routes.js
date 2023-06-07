import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Timer from "../screens/Timer";

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator>
      <Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}r
      />
      <Screen
        name="Timer"
        component={Timer}
      />
    </Navigator>
  )
}