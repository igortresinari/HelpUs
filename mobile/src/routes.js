import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Events from './pages/Events';
import Logon from './pages/Logon';
import Detail from './pages/Detail';
import LogonOng from './pages/LogonOng';
import Register from './pages/Register';
import Home from './pages/Home';
import NewEvent from './pages/NewEvent';


export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Logon" component={Logon} />
                <AppStack.Screen name="Events" component={Events} />
                <AppStack.Screen name="Detail" component={Detail} />
                <AppStack.Screen name="LogonOng" component={LogonOng} />
                <AppStack.Screen name="Register" component={Register} />
                <AppStack.Screen name="Home" component={Home} />
                <AppStack.Screen name="NewEvent" component={NewEvent} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}