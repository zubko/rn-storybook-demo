import { AppRegistry, NativeModules } from "react-native";
import { name as appName } from "./app.json";
import { App } from "./app/App";

AppRegistry.registerComponent(appName, () => App);

if (__DEV__) {
  const QAStorybookTriggerModule = NativeModules.QAStorybookTriggerModule;
  // QAStorybookTriggerModule.initialize();
}
