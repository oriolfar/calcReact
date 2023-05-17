import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'black',
    },
    calcContainer: {
        flex: 1,
        paddingHorizontal: 25,
        backgroundColor: 'black',
        justifyContent: 'flex-end',

    },
    result: {
        color: 'white',
        fontSize: 60,
        textAlign: 'right',
        marginBottom: 10,
    },
    resultSmall: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 30,
        textAlign: 'right',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 100,
    },
    button: {
        height: 80,
        width: 80,
        borderRadius: 100,
        backgroundColor: '#2D2D2D',
        justifyContent: 'center',
        marginHorizontal: 8,
    },
    buttonText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: 'white',
        fontWeight: '400',
    }

});