import { StyleSheet } from "react-native";

export const styles: any = StyleSheet.create({
    flex: {
        flexDirection: "row"
    },
	container: {
        flex: 1,
        flexDirection: 'row',
    },
	capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        color: '#000',
        padding: 10,
        margin: 40
    },
	button: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40,
  },
	rectangle: {
        height: 400,
        width: 400,
        borderWidth: 1,
        borderColor: '#00FF00',
        backgroundColor: 'transparent'
    },
    badge: {
        borderRadius: 30,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: "#D9534F"
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    label: {
        textAlign: "center",
        fontSize: 15,
        fontWeight: "bold",
        color: "#FFFFFF"
    }
});
