import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from './screens/SignUpScreen';
import AppLoading from 'expo-app-loading';
import { useFonts, Yellowtail_400Regular, Poppins_500Medium, Poppins_400Regular, Moul_400Regular } from '@expo-google-fonts/dev';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
import Screen4 from './screens/Screen4';
import Screen5 from './screens/Screen5';
import Screen6 from './screens/Screen6';

const Stack = createNativeStackNavigator();
export default function App() {
  let [fontsLoaded] = useFonts({
    Yellowtail_400Regular,
    Poppins_400Regular,
    Moul_400Regular,
    Poppins_500Medium
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Fifth Screen"
            options={{ headerShown: false }} component={Screen5} />
          <Stack.Screen name="Giriş Ekranı"
            options={{ headerShown: false }} component={SignUpScreen} />
          <Stack.Screen name="Second Screen"
            options={{ headerShown: false }} component={Screen2} />
          <Stack.Screen name="Third Screen"
            options={{ headerShown: false }} component={Screen3} />
          <Stack.Screen name="Fourth Screen"
            options={{ headerShown: false }} component={Screen4} />
          <Stack.Screen name="Sixth Screen"
            options={{ headerShown: false }} component={Screen6} />

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
