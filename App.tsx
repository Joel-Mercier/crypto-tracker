import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoadAssets from "./src/components/LoadAssets";
import CoinsScreen, {
  screenAssets as coinsAssets,
} from "./src/containers/CoinsScreen";
import CurrencyScreen from "./src/containers/CurrencyScreen";

const Stack = createStackNavigator();

const fonts = {
  "GothamRounded-Medium": require("./src/assets/fonts/GothamRounded/GothamRounded-Medium.otf"),
  "GothamRounded-Bold": require("./src/assets/fonts/GothamRounded/GothamRounded-Bold.otf"),
  "GothamRounded-Light": require("./src/assets/fonts/GothamRounded/GothamRounded-Light.otf"),
};

const assets = [...coinsAssets];

const App = () => {
  return (
    <LoadAssets assets={assets} fonts={fonts}>
      <Stack.Navigator initialRouteName="Coins">
        <Stack.Screen
          name="Coins"
          component={CoinsScreen}
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
