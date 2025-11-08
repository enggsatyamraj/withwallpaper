import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainOnboarding from '../screens/onboardingScreens/mainOnboarding.screen';
import LoginScreen from '../screens/authScreens/LoginScreen.tsx';

const Stack = createNativeStackNavigator();

export default function AuthNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="mainOnboarding"
                component={LoginScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}
