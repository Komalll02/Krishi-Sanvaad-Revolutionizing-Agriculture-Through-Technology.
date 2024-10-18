import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../components/screens/HomeScreen';
import ChatbotScreen from '../components/screens/ChatbotScreen';
import MarketplaceScreen from '../components/screens/MarketplaceScreen';
import CropPredictionScreen from '../components/screens/CropPredictionScreen';
import DiseasePredictionScreen from '../components/screens/DiseasePredictionScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Chatbot" component={ChatbotScreen} />
        <Stack.Screen name="Marketplace" component={MarketplaceScreen} />
        <Stack.Screen name="CropPrediction" component={CropPredictionScreen} />
        <Stack.Screen name="DiseasePrediction" component={DiseasePredictionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
