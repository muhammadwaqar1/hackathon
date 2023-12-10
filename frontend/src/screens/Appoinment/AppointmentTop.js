import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Appointment from './Appointment';
import AppointmentAvailable from './AppointmentAvailable';
import AddAppointment from './AddAppointment';

const Tab = createMaterialTopTabNavigator();

const AppointmentTop = () => {

    return (
        <>
            <Tab.Navigator initialRouteName='Appointment' screenOptions={{ headerShown: false }}>
                <Tab.Screen name="Appointment" component={Appointment} />
                <Tab.Screen name="Available" component={AppointmentAvailable} />
                <Tab.Screen name="Add" component={AddAppointment} />
            </Tab.Navigator>
        </>
    )
}

export default AppointmentTop