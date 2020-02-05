import React from 'react';
import { View } from 'react-native';
import ContactsPermission from './ContactsPermission';
import ContactsScreen from './Screens/ContactsScreen';

const HomeScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            {/* <ContactsPermission /> */}
            <ContactsScreen />
        </View>
    )
}

export default HomeScreen
