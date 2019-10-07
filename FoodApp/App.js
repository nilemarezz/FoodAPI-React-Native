import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from "./src/screens/SearchScreen";
import Detail from './src/Components/ResultDetail'
const AppNavigator = createStackNavigator(
  {
    Search: SearchScreen,
    Detail: Detail
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business Search"
    }
  }
);

export default createAppContainer(AppNavigator);
