import React from 'react';
import { View } from 'react-native';
import ContactsPermission from './ContactsPermission';

const HomeScreen = () => {
    return (
        <View>
            <ContactsPermission />
        </View>
    )
}

export default HomeScreen
