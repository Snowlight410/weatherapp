import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Screens/HomeScreen";
import Weathertag from "./Screens/Weathertag";
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
          {(props) => <HomeScreen {...props} title="ldsjflksd" />}
        </Stack.Screen>
        <Stack.Screen name="Weathertag" component={Weathertag} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
