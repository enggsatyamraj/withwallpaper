import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Theme } from '../../constants';
import { useThemedStyles } from '../../hooks/useThemedStyles.ts';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import Button from '../../components/Button.tsx';

const LoginScreen = () => {
    const styles = useThemedStyles(createStyles);
    const handleBtnClick = () => {
        console.log("btn clicked")
    }
    return (
        <SafeAreaView style={styles.mainContainer}>
            <Icon name="wallpaper" size={32} color="#258cf4" />
            <Text style={styles.mainText}>Join the community</Text>
            <Button onPress={handleBtnClick}>Continue with google</Button>
        </SafeAreaView>
    );
};

const createStyles = (theme: Theme) =>
    StyleSheet.create({
        mainContainer: {
            flex: 1,
            paddingHorizontal: theme.spacing.lg,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: theme.colors.background,
        },
        mainText: {
            color: theme.colors.foreground,
            fontSize: theme.typography.fontSize["4xl"],
            marginTop: theme.spacing["2xl"],
            fontWeight: theme.typography.fontWeight.semibold
        },
    });

export default LoginScreen;
