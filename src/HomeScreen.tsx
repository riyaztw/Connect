import React from 'react';
import { View } from 'react-native';
import Permissions from './Permissions';
import RuntimePermissionSample from './RuntimePermissionSample';
import ContactsDisplay from './ContactsDisplay';

const HomeScreen = () => {
    return (
        <View>
            <Permissions />
            {/* <RuntimePermissionSample />
            <ContactsDisplay /> */}
        </View>
    )
}

export default HomeScreen
