import { enableScreens } from 'react-native-screens';
enableScreens();
import React, { useState, useEffect } from 'react';
import { StatusBar, Text, View, StyleSheet } from 'react-native';
import { ThemeProvider, useThemeMode } from './src/context/themeContext';
import RootNavigation from './src/navigation/RootNavigation';
import { useThemedStyles } from './src/hooks/useThemedStyles';
import { Theme } from './src/constants';
import Icon from 'react-native-vector-icons/MaterialIcons';

function SplashScreen() {
    const styles = useThemedStyles(createStyles);

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
            <View style={styles.mainContainer}>
                {/* Icon with circular background */}
                <View style={styles.iconContainer}>
                    <View style={styles.subIconContainer}>
                        <Icon name="wallpaper" size={32} color="#258cf4" />
                    </View>
                </View>

                {/* App Name */}
                <Text style={styles.appName}>PixelFlow</Text>

                {/* Tagline */}
                <Text style={styles.tagline}>Your Walls. Your World.</Text>
            </View>
        </>
    );
}

// Main App Content Component
function MainAppContent() {
    const { isDark } = useThemeMode();

    return (
        <>
            <StatusBar
                barStyle={isDark ? 'light-content' : 'dark-content'}
                backgroundColor="transparent"
                translucent
            />
            <RootNavigation />
        </>
    );
}

// App Content with Splash Logic
function AppContent() {
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        // Hide splash after 3 seconds
        const timer = setTimeout(() => {
            setShowSplash(false);
        }, 3000);

        // Cleanup timer
        return () => clearTimeout(timer);
    }, []);

    // Show splash or main app based on state
    return showSplash ? <SplashScreen /> : <MainAppContent />;
}

// Root App Component
function App(): React.JSX.Element {
    return (
        <ThemeProvider>
            <AppContent />
        </ThemeProvider>
    );
}

const createStyles = (theme: Theme) =>
    StyleSheet.create({
        mainContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.colors.background,
        },
        iconContainer: {
            width: 90,
            height: 90,
            borderRadius: 50,
            backgroundColor: theme.colors.sub_sub_primary,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: theme.spacing.sm,
            // ...theme.shadows.lg,
        },
        appName: {
            fontSize: theme.typography.fontSize['4xl'],
            fontWeight: theme.typography.fontWeight.semibold,
            color: theme.colors.foreground,
            marginBottom: 8,
            letterSpacing: theme.typography.letterSpacing.wide,
        },
        tagline: {
            fontSize: theme.typography.fontSize.lg,
            fontWeight: theme.typography.fontWeight.normal,
            color: theme.colors.textSecondary,
        },
        subIconContainer: {
            width: 60,
            height: 60,
            borderRadius: 40,
            backgroundColor: theme.colors.sub_primary,
            justifyContent: 'center',
            alignItems: 'center',
            // ...theme.shadows.lg,
        },
    });

export default App;
