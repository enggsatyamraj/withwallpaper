import { StyleSheet } from 'react-native';
import { useTheme, Theme } from '../constants';

export const useThemedStyles = <T extends StyleSheet.NamedStyles<T>>(
    stylesFn: (theme: Theme) => T
) => {
    const theme = useTheme();
    return StyleSheet.create(stylesFn(theme));
};
