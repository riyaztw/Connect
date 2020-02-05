import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ContactCard = ({ contact }) => {
    return (
        <View style={styles.container}>
            <Text>{contact.givenName}</Text>
        </View>
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
