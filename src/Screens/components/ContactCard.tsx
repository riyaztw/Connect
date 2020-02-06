import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { yellowSnack } from '../../Services/SnackService'

const ContactCard = ({ contact }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={()=>{yellowSnack("clicked")}}>
            <Text>{contact.givenName}</Text>
        </TouchableOpacity>
    )
}

export default ContactCard

const styles = StyleSheet.create({
    container: {
        padding: 16,
        marginVertical: 8,
        borderRadius: 4,
        backgroundColor: "#eeeeee",
    }
})
