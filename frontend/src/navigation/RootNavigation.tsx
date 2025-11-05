import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { hasSeenOnboarding } from '../utils/onboarding.utils';
import MainNavigation from './MainNavigation';
import OnboardingNavigation from './OnboardingNavigation';

export default function RootNavigation() {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [hasSeenOnboard, setHasSeenOnboard] = useState(false);

    useEffect(() => {
        checkOnboardingStatus();
    }, []);

    const checkOnboardingStatus = async () => {
        try {
            const hasSeen = await hasSeenOnboarding();
            setHasSeenOnboard(hasSeen);
        } catch (err) {
            console.log('Error:::: ', err);
        } finally {
            setIsLoading(false);
        }
    };

    const handleOnboardingComplete = () => {
        setHasSeenOnboard(true);
    };

    if (isLoading) {
        return null;
    }

    return (
        <NavigationContainer>
            {/* {hasSeenOnboard ? (
                <MainNavigation />
            ) : (
                <OnboardingNavigation onComplete={handleOnboardingComplete} />
            )} */}
            <MainNavigation />
        </NavigationContainer>
    );
}
