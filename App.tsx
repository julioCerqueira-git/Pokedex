import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./src/screens/HomeScreen";
import DetailsScreen from "./src/screens/DetailScreen";
import { RootStackParamList } from "./src/types/navigation";

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Pokédex", headerStyle: { backgroundColor: "#4CAF50" }, headerTintColor: "#fff", }} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ title: "Detalhes", headerStyle: { backgroundColor: "#388E3C"}, headerTintColor: "#fff", }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;