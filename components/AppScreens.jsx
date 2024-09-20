import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import AllArticlesScreen from './AllArticlesScreen';
import AllNewsScreen from './AllNewsScreen';
import AllVideosScreen from './AllVideosScreen';

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
                    component={AllArticlesScreen}
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
                    component={AllNewsScreen}
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
                    component={AllVideosScreen}
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
