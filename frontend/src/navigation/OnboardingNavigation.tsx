import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainOnboarding from '../screens/onboardingScreens/mainOnboarding.screen';

const Stack = createNativeStackNavigator();

export default function OnboardingNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="mainOnboarding"
                component={MainOnboarding}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}
