import React, { Component } from 'react'
import { Text, View, Button, ToastAndroid } from 'react-native'
import { check, PERMISSIONS, RESULTS, request } from 'react-native-permissions';
import Permissions from './Permissions';

export class ContactsPermission extends Component {

    getReadContactsPermission = () => {
        request(PERMISSIONS.ANDROID.READ_CONTACTS)
            .then(getPermissionsStatus)
            .catch(somethingWentWrong)
    }

    getCameraPermission = () => {
        request(PERMISSIONS.ANDROID.CAMERA)
            .then(getPermissionsStatus)
            .catch(somethingWentWrong)
    }
    render() {
        return (
            <View>
                <Text>********************************************************************</Text>
                <Text>Give Permissions using react-native-permissions</Text>
                <Text>Give Contacts Permission </Text>
                <Button title="Contacts Permission" onPress={this.getReadContactsPermission} />
                <Text>Give Camera Permission </Text>
                <Button title="Camera Permission" onPress={this.getCameraPermission} />
                <Text>********************************************************************</Text>
                <Permissions />
            </View>
        )
    }
}

export default ContactsPermission

const somethingWentWrong = () => {
    ToastAndroid.show("Something went wrong", ToastAndroid.BOTTOM);
};


const getPermissionsStatus = (result: "unavailable" | "denied" | "blocked" | "granted") => {
    switch (result) {
        case RESULTS.UNAVAILABLE:
            ToastAndroid.show('This feature is not available (on this device / in this context)', ToastAndroid.BOTTOM);
            break;
        case RESULTS.DENIED:
            ToastAndroid.show("The permission has not been requested / is denied but requestable", ToastAndroid.BOTTOM);
            break;
        case RESULTS.GRANTED:
            ToastAndroid.show("The permission is granted", ToastAndroid.BOTTOM);
            break;
        case RESULTS.BLOCKED:
            ToastAndroid.show("The permission is denied and not requestable anymore", ToastAndroid.BOTTOM);
            break;
    }
};


