import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoadAssets from "./src/components/LoadAssets";
import CurrenciesScreen, {
  screenAssets as trackersAssets,
} from "./src/containers/CurrenciesScreen";
import CurrencyScreen from "./src/containers/CurrencyScreen";

const Stack = createStackNavigator();

const fonts = {
  "GothamRounded-Medium": require("./src/assets/fonts/GothamRounded/GothamRounded-Medium.otf"),
  "GothamRounded-Bold": require("./src/assets/fonts/GothamRounded/GothamRounded-Bold.otf"),
  "GothamRounded-Light": require("./src/assets/fonts/GothamRounded/GothamRounded-Light.otf"),
};

const assets = [...trackersAssets];

const App = () => {
  return (
    <LoadAssets assets={assets} fonts={fonts}>
      <Stack.Navigator initialRouteName="Currencies">
        <Stack.Screen
          name="Currencies"
          component={CurrenciesScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Currency" component={CurrencyScreen} />
      </Stack.Navigator>
    </LoadAssets>
  );
};

export default App;
