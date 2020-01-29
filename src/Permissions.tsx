import React from 'react'
import { View, Text } from 'react-native'
import { check, PERMISSIONS, RESULTS } from 'react-native-permissions'
const Permissions = () => {

    const getPermission = () => {
        check(PERMISSIONS.IOS.LOCATION_ALWAYS)
            .then(result => {
                switch (result) {
                    case RESULTS.UNAVAILABLE:
                        console.log(
                            'This feature is not available (on this device / in this context)',
                        );
                        break;
                    case RESULTS.DENIED:
                        console.log(
                            'The permission has not been requested / is denied but requestable',
                        );
                        break;
                    case RESULTS.GRANTED:
                        console.log('The permission is granted');
                        break;
                    case RESULTS.BLOCKED:
                        console.log('The permission is denied and not requestable anymore');
                        break;
                }
            })
            .catch(err => { /* */ })
    }
    return (
        <View>
            <Text>Getting Permissions</Text>
            {getPermission()}
        </View>
    )
}

export default Permissions
