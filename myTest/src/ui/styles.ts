import { StyleSheet } from "react-native";

export const styles: any = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    camera: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    bottom: {
        position: 'absolute',
        height: 84,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    takeImage: {
        width: 64,
        height: 64,
        margin: 10,
    },
    switchCamera: {
        color: '#fff',
        fontSize: 20,
    },
    myButton:{
        padding: 5,
        height: 60,
        width: 60,  //The Width must be the same as the height
        borderRadius:400, //Then Make the Border Radius twice the size of width or Height   
        backgroundColor:'rgb(195, 125, 198)',
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    

});
