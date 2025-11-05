import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/mainScreens/home.screen';
import WishlistScreen from '../screens/mainScreens/wishlist.screen';
import UploadScreen from '../screens/mainScreens/upload.screen';
import ProfileScreen from '../screens/mainScreens/profile.screen';
import { useTheme } from '../constants';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name="HomeMain" component={HomeScreen} />
        </HomeStack.Navigator>
    );
}

function WishlistStackScreen() {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name="WishlistMain" component={WishlistScreen} />
        </HomeStack.Navigator>
    );
}

function UploadStackScreen() {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name="UploadMain" component={UploadScreen} />
        </HomeStack.Navigator>
    );
}

function ProfileStackScreen() {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name="ProfileMain" component={ProfileScreen} />
        </HomeStack.Navigator>
    );
}

export default function MainNavigation() {
    const theme = useTheme();

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: theme.colors.primary,
                tabBarInactiveTintColor: theme.colors.iconSecondary,
                tabBarStyle: {
                    backgroundColor: theme.colors.card,
                    borderTopColor: theme.colors.border,
                    borderTopWidth: 1,
                    height: 70,
                    paddingBottom: 8,
                    paddingTop: 8,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '500',
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeStackScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => <Icon name="home" size={size} color={color} />,
                }}
            />
            <Tab.Screen
                name="Wishlist"
                component={WishlistStackScreen}
                options={{
                    tabBarLabel: 'Wishlist',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="heart" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Upload"
                component={UploadStackScreen}
                options={{
                    tabBarLabel: 'Upload',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="add-circle" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileStackScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="person" size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
