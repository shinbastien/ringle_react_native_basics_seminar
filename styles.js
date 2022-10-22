import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    customText: {
        color: 'red',
        fontSize: 40,
        backgroundColor: 'rgba(255,200,100, 0.5)'
    },

    customView: {
        padding: 20,
        borderRadius: 8,
        backgroundColor: 'black',
    },

    customImage: {
        width: 50,
        height: 50,
    },
    customButton: {
        backgroundColor: '#7a5de8',
        padding: 8,
        borderRadius: 4,
    },
    textInButton: {
        fontWeight: "600",
    },
    input: {
        height: 60,
        width: "50%",
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 4,
        padding: 4,
    },
    customImageDetail: {
        width: '100%',
        height: 200,
    },
    view1: {
        backgroundColor: '442dc9',
        padding: 20,
    },
    view2: {
        backgroundColor: 'white',
    }
});

export default styles;