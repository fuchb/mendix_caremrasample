import { Component, createElement } from "react";
import { Platform, Text, View, Image } from "react-native";

import { styles } from "../ui/styles";
import {RNCamera} from 'react-native-camera';

const defaultBadgeStyle = {
    container: styles.flex,
    badge: styles.badge,
    label: styles.label
};

export class CameraSample extends Component {

    render() {
        
        return (
            <View>
                <RNCamera
                    style={styles.rectangle}
                    ref={ref => {
                        this.camera = ref;
                    }}
                    type={RNCamera.Constants.Type.back}>
                        <View>
                            <Text style={styles.button} onPress={this.takePicture.bind(this)}>[take photo]</Text>
                             <Image style={{width: 100, height: 100, marginBottom: 20}} source={{uri: ""}}>
 
                             </Image>
                        </View> 
                    </RNCamera>
            </View>
        );
    }
    
    takePicture() {
        const options = {jpegQuality: 50};
 
        this.camera.capture({options})
 
            .then((data) =>{
            alert(data.path)
                console.log(data);
 
                /*イメージパス*/
                this.setState({
                    imagePath: data.path,
                });
 
                /*イメージサイズ取得*/
                Image.getSize(data.path,(width,height) =>{
                    console.log(width,height);
                });
 
            })
            .catch(err => console.error(err));
 
    }

}
