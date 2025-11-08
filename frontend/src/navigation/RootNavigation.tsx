import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { hasSeenOnboarding } from '../utils/onboarding.utils';
import MainNavigation from './MainNavigation';
import OnboardingNavigation from './OnboardingNavigation';
import AuthNavigation from './AuthNavigation.tsx';

export default function RootNavigation() {
    return (
        <NavigationContainer>
            <AuthNavigation />
        </NavigationContainer>
    );
}
