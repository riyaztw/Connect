import React, { Component } from 'react'
import { FlatList, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Contacts from "react-native-contacts"
import { PERMISSIONS, request, RESULTS } from 'react-native-permissions'
import { greenSnack, redSnack, yellowSnack } from '../Services/SnackService'
import ContactCard from './components/ContactCard'

export class ContactsScreen extends Component {
    state = {
        contacts: []
    }
    private readonly iOS: string = "ios";

    constructor(props: Readonly<{}>) {
        super(props)

        this.state = {
            contacts: []
        }
    }

    readContacts = () => {
        if (this.state.contacts.length > 0) {
            yellowSnack("Contacts already fetched");
            return;
        }

        request(Platform.OS === this.iOS ? PERMISSIONS.IOS.CONTACTS : PERMISSIONS.ANDROID.READ_CONTACTS)
            .then(() => {
                Contacts.getAll((result, contacts) => {
                    switch (result) {
                        case RESULTS.DENIED:
                            redSnack("The permission has not been requested / is denied but requestable");
                            break;
                        case RESULTS.BLOCKED:
                            redSnack("The permission is denied and not requestable anymore");
                            break;
                        case RESULTS.UNAVAILABLE:
                            redSnack("This feature is not available (on this device / in this context)");
                            break;
                        default:
                            greenSnack("contacts fetched" + result)
                            this.setState({ contacts })
                            break;
                    }
                })
            })
    }


    render() {
        return (
            <View style={styles.mainContainer}>
                <FlatList
                    data={this.state.contacts}
                    renderItem={({ item }) => <ContactCard contact={item} />}
                    keyExtractor={item => item.givenName}
                />
                <TouchableOpacity onPress={this.readContacts} style={styles.buttonContainer} >
                    <Text>Give Contacts Permission</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default ContactsScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        margin: 16
    },
    buttonContainer: {
        alignSelf: "flex-end",
        backgroundColor: "skyblue",
        width: "100%",
        height: 40,
        justifyContent: "center",
        alignItems: "center",
    }
})
