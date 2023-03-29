import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import ScreenNav from "./ScreenNav";
//import { Provider } from "react-redux";

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <ScreenNav />
    </NavigationContainer>
  );
};

export default RootNavigator;
