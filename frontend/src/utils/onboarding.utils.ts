import AsyncStorage from '@react-native-async-storage/async-storage';
import { OnboardingKeys } from './key.utils';

export const setOnboardingComplete = async () => {
    await AsyncStorage.setItem(OnboardingKeys.HAS_SEEN_ONBOARDING, 'true');
};

export const hasSeenOnboarding = async (): Promise<boolean> => {
    const value = await AsyncStorage.getItem(OnboardingKeys.HAS_SEEN_ONBOARDING);
    return value === 'true';
};
