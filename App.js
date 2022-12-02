// import React from "react";
// import { NavigationContainer } from "@react-navigation/native"
// import { createStackNavigation } from "@react-navigation/stack"
// import myHomeScreen from "./src/screen/HomeScreen";

// const stack = createStackNavigation();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <stack.Navigator>
//         <stack.Screen
//           name="Home"
//           component={myHomeScreen}
//         />
//       </stack.Navigator>
//     </NavigationContainer>
//   )
// }

import React from "react";
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import myHomeScreen from "./src/screen/HomeScreen";
import ListScreen from "./src/screen/ListScreen";
import loginPage from "./src/screen/LoginPage";
const stack = createStackNavigator();

function App() {
  return (<NavigationContainer>
    <stack.Navigator>
      <stack.Screen name="LoginPage" component={loginPage} />
      <stack.Screen name="Home" component={myHomeScreen} />
      <stack.Screen name="ListScreen" component={ListScreen} />
    </stack.Navigator>

  </NavigationContainer>)
}

export default App;
