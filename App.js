import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, TouchableOpacity, TextInput, Image, FlatList} from 'react-native';

import axios from "axios";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WebinarDetail from "./components/pages/WebinarDetail";
import WebinarList from "./components/pages/WebinarList";

import { RecoilRoot } from "recoil";

const Stack = createNativeStackNavigator();

//axios.get('https://qa2.ringleserver.com/api/v4/student/landing/webinar')


export default function App() {
    return (
        <RecoilRoot>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name={"WebinarList"} component={WebinarList}/>
                    <Stack.Screen name={"WebinarDetail"} component={WebinarDetail}/>
                </Stack.Navigator>
            </NavigationContainer>
        </RecoilRoot>
    )
}
