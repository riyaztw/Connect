import React, { Component } from "react";

import { View, Button, PermissionsAndroid } from "react-native";

export default class ContactsDisplay extends Component {
    render() {
        return (
            <View>
                <Button title="Press me for contacts!" onPress={this.getContacts} />
            </View>
        )
    }

    async requestContactsPermission() {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
            {
                title: 'Hey you need to give us contacts permissions!',
                message: 'We need to read your contacts so we can sell them to advertisers.',
                buttonNeutral: 'Ask me later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
            }
        )
        return granted === PermissionsAndroid.RESULTS.GRANTED
    }

    getContacts = () => {
        this.requestContactsPermission()
            .then(function (didGetPermission: boolean) {
                if (didGetPermission) {
                    Contacts.getAll((err, contacts) => {
                        if (err) throw err;
                        alert("We got some contacts!")
                    })
                } else {
                    alert("Oh no no permissions!")
                }
            })
    }
}