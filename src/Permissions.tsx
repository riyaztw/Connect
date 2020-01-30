import React, { Component } from 'react';
import { Button, PermissionsAndroid, View, ToastAndroid, Text } from 'react-native';

export class Permissions extends Component {
    state: {
        isPermissionsGiven: boolean
    }
    constructor(props: Readonly<{}>) {
        super(props)
        this.state = {
            isPermissionsGiven: false
        }
    }

    private requestCameraPermission = async () => {
        try {
            if (this.state.isPermissionsGiven) {
                ToastAndroid.show("You can use the camera, Permission given already", ToastAndroid.BOTTOM)
                return;
            }
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: 'Connect Photo App Camera Permission',
                    message: 'Connect Photo App needs access to your camera ' +
                        'so you can take awesome pictures.',
                    buttonNeutral: 'Ask me later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                this.setState({ isPermissionsGiven: true })
                ToastAndroid.show("You can use the camera", ToastAndroid.BOTTOM)
                console.log("You can use the camera");
            } else {
                ToastAndroid.show("Camera permission denied", ToastAndroid.BOTTOM)
                console.log("Camera permission denied")
            }
        } catch (error) {
            console.log("Error")
        }
    }

    render() {
        return (
            <View>
                <Text>Give Camera Permissions</Text>
                <Button
                    title="Give Camera Permissions"
                    onPress={this.requestCameraPermission}
                />
            </View>
        )
    }
}

export default Permissions
