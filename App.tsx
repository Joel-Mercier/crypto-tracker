import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import LoadAssets from "./src/components/LoadAssets";
import TrackersScreen, {
  assets as trackersAssets,
} from "./src/containers/TrackersScreen";

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
      <Tab.Navigator>
        <Tab.Screen name="Trackers" component={TrackersScreen} />
      </Tab.Navigator>
    </LoadAssets>
  );
};

export default App;
