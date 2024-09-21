import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';

import AllArticlesScreen from './AllArticlesScreen';
import AllNewsScreen from './AllNewsScreen';
import AllVideosScreen from './AllVideosScreen';

import ArticleScreen from './ArticleScreen';
import NewsScreen from './NewsScreen';
import VideoScreen from './VideoScreen';

import AIBotprototypeScreen from './AIBotprototypeScreen';

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
                 <Stack.Screen
                    name="ArticleOne"
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
                    name="NewsOne"
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
                    name="VideoOne"
                    component={VideoScreen}
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
                    name="AIBot"
                    component={AIBotprototypeScreen}
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
