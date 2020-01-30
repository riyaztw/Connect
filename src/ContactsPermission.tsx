import React, { Component } from 'react';
import { Button, Platform, Text, View } from 'react-native';
import { PERMISSIONS, request, RESULTS } from 'react-native-permissions';
import Permissions from './Permissions';
import { greenSnack, redSnack } from './Services/SnackService';

export class ContactsPermission extends Component {

    private readonly iOS = "ios";

    getReadContactsPermission = () => {
        request(Platform.OS === this.iOS ? PERMISSIONS.IOS.CONTACTS : PERMISSIONS.ANDROID.READ_CONTACTS)
            .then(getPermissionsStatus)
            .catch(somethingWentWrong)
    }

    getCameraPermission = () => {
        request(Platform.OS === "ios" ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA)
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
    redSnack("Something went wrong")
};


const getPermissionsStatus = (result: "unavailable" | "denied" | "blocked" | "granted") => {
    switch (result) {
        case RESULTS.UNAVAILABLE:
            redSnack("This feature is not available (on this device / in this context)");
            break;
        case RESULTS.DENIED:
            redSnack("The permission has not been requested / is denied but requestable");
            break;
        case RESULTS.GRANTED:
            greenSnack("The permission is granted");
            break;
        case RESULTS.BLOCKED:
            redSnack("The permission is denied and not requestable anymore");
            break;
    }
};


