import { Colors } from './colors';
import { Spacing } from './spacing';
import { Typography } from './typography';
import { Shadows } from './shadows';
import { useThemeMode } from '../context/themeContext';

export const useTheme = () => {
    const { isDark } = useThemeMode();

    return {
        colors: isDark ? Colors.dark : Colors.light,
        commonColors: Colors.common,
        spacing: Spacing,
        typography: Typography,
        shadows: isDark ? Shadows.dark : Shadows.light,
        isDark,
    };
};

// Export individual constants for direct import
export { Colors, Spacing, Typography, Shadows };

// Theme type for TypeScript
export type Theme = ReturnType<typeof useTheme>;
