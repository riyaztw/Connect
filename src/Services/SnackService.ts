import Snackbar from "react-native-snackbar";

const SnackService = (message: string, backroundColor: string, textColor?: string) => {
    Snackbar.show({
        text: message,
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: backroundColor,
        textColor,
        action: {
            text: "close",
            textColor,
            onPress: () => Snackbar.dismiss()
        }
    })
}

const greenSnack = (message: string) => {
    SnackService(message, "green")
}

const redSnack = (message: string) => {
    SnackService(message, "red")
}

const yellowSnack = (message: string) => {
    SnackService(message, "yellow", "black")
}

export {
    greenSnack,
    redSnack,
    yellowSnack,
}