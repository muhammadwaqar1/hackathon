import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AddDoctor from './AddDoctor';
import DoctorTime from './DoctorTime';
import DoctorInformation from './DoctorInformation';
const Tab = createMaterialTopTabNavigator();

const DoctorTop = () => {

    return (
        <>
            <Tab.Navigator initialRouteName='Doctor' screenOptions={{ headerShown: false, }}>
                <Tab.Screen name="Doctor" component={DoctorInformation} />
                <Tab.Screen name="Doctor-Time" component={DoctorTime} />
                <Tab.Screen name="Add-Doctor" component={AddDoctor} />
            </Tab.Navigator>
        </>
    )
}

export default DoctorTop