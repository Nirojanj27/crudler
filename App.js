import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ModuleListScreen from "./src/components/screens/ModuleListScreen";
import ModuleAddScreen from "./src/components/screens/ModuleAddScreen";
import ModuleModifyScreen from "./src/components/screens/ModuleModifyScreen";
import ModuleViewScreen from "./src/components/screens/ModuleViewScreen";

const Stack = createNativeStackNavigator();


export const App = () => {
  //Initiallsations __________________
  //State  ________________________
  //Handlers ______________________
  //View _____________________________
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="ModuleListScreen"
        screenOptions={{
            headerShown: true,
            headerStyle: {backgroundColor: 'black'},
            headerTintColor: 'white',
        
        
        }}
      >

        <Stack.Screen
          name='ModuleListScreen'
          component={ModuleListScreen}
          options={{
            title: 'List modules',
            headerShown: true
          }}
        />

        <Stack.Screen
          name='ModuleAddScreen'
          component={ModuleAddScreen}
          options={{
            title: 'Add modules',
            headerShown: true
          }}
        />

        <Stack.Screen
          name='ModuleViewScreen'
          component={ModuleViewScreen}
          options={{
            title: 'View modules',
            headerShown: true
          }}
        />

        <Stack.Screen
          name='ModuleModifyScreen'
          component={ModuleModifyScreen}
          options={{
            title: 'Modify modules',
            headerShown: true
          }}
        />


      </Stack.Navigator>
    </NavigationContainer>

  );
}




export default App;