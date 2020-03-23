import { Component, ReactNode, createElement } from "react";
import { View, Text, CameraRoll } from "react-native";
import {RNCamera} from 'react-native-camera';
import { styles } from "../ui/styles";

export class CameraTest extends Component {
    camera: any;
    imagepath:string = "";
     render():ReactNode {
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
                    </View> 
                    </RNCamera>
            </View>
        );
    }
    private async takePicture():  Promise<number> {
        var options: any = { quality: 0.5, base64: true };
        const data = await this.camera.takePictureAsync(options);
        CameraRoll.saveToCameraRoll(data.uri);
        console.log(data.uri);
        return 0;
    }
}