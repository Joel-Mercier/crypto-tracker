import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import LoadAssets from "./src/components/LoadAssets";
import CurrenciesScreen, {
  screenAssets as trackersAssets,
} from "./src/containers/CurrenciesScreen";
import CurrencyScreen from "./src/containers/CurrencyScreen";

const Tab = createBottomTabNavigator();

const fonts = {
  "GothamRounded-Medium": require("./src/assets/fonts/GothamRounded/GothamRounded-Medium.otf"),
  "GothamRounded-Bold": require("./src/assets/fonts/GothamRounded/GothamRounded-Bold.otf"),
  "GothamRounded-Light": require("./src/assets/fonts/GothamRounded/GothamRounded-Light.otf"),
};

const assets = [...trackersAssets];

const App = () => {
  return (
    <LoadAssets assets={assets} fonts={fonts}>
      <Tab.Navigator initialRouteName="Currencies">
        <Tab.Screen name="Currencies" component={CurrenciesScreen} />
        <Tab.Screen name="Currency" component={CurrencyScreen} />
      </Tab.Navigator>
    </LoadAssets>
  );
};

export default App;
