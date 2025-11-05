import React, { useState, useEffect } from 'react';
import { StatusBar, Text, View, StyleSheet } from 'react-native';
import { ThemeProvider, useThemeMode } from './src/context/themeContext';
import RootNavigation from './src/navigation/RootNavigation';

// Splash Screen Component
function SplashScreen() {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
            <View style={styles.splashContainer}>
                <View style={styles.logoContainer}>
                    <Text style={styles.logoIcon}>📱</Text>
                    <Text style={styles.appName}>WallCraft</Text>
                    <Text style={styles.appTagline}>Beautiful Wallpapers</Text>
                </View>

                <View style={styles.loadingContainer}>
                    <Text style={styles.loadingText}>Loading...</Text>
                </View>
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

const styles = StyleSheet.create({
    splashContainer: {
        flex: 1,
        backgroundColor: '#007AFF', // Your primary blue color
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 80,
    },
    logoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoIcon: {
        fontSize: 80,
        marginBottom: 20,
    },
    appName: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 8,
        letterSpacing: 1,
    },
    appTagline: {
        fontSize: 18,
        color: 'rgba(255, 255, 255, 0.8)',
        fontWeight: '500',
    },
    loadingContainer: {
        alignItems: 'center',
    },
    loadingText: {
        fontSize: 16,
        color: 'rgba(255, 255, 255, 0.7)',
    },
});

export default App;
