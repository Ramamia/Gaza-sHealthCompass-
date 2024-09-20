import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import ArticleScreen from './ArticleScreen';
import NewsScreen from './NewsScreen';
import VideosScreen from './VideosScreen';

const Stack = createStackNavigator();

const AppScreens = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="home">
                <Stack.Screen
                    name="home"
                    component={HomeScreen}
                    options={{
                        title: "Resilient Rebuilders",
                        headerStyle: {
                            backgroundColor: '#D21124',
                        },
                        headerTintColor: '#EBE6C1',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                />
                <Stack.Screen
                    name="Articles"
                    component={ArticleScreen}
                    options={{
                        title: "Resilient Rebuilders",
                        headerStyle: {
                            backgroundColor: '#D21124',
                        },
                        headerTintColor: '#EBE6C1',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                />
                <Stack.Screen
                    name="News"
                    component={NewsScreen}
                    options={{
                        title: "Resilient Rebuilders",
                        headerStyle: {
                            backgroundColor: '#D21124',
                        },
                        headerTintColor: '#EBE6C1',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                />
                <Stack.Screen
                    name="Videos"
                    component={VideosScreen}
                    options={{
                        title: "Resilient Rebuilders",
                        headerStyle: {
                            backgroundColor: '#D21124',
                        },
                        headerTintColor: '#EBE6C1',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppScreens;
