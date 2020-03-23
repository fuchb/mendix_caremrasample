import { Component, ReactNode, createElement } from "react";
import { View, Text, Image } from "react-native";
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
                        <Image style={{width: 100, height: 100, marginBottom: 20}} source={{uri: super.state.imagePath}}>

                        </Image>
                    </View> 
                    </RNCamera>
            </View>
        );
    }
    private async takePicture():  Promise<number> {
        var options: any = { quality: 0.5, base64: true };
        const data = await this.camera.takePictureAsync(options);
        this.setState({
            imagePath: data.uri,
        });
        console.log(data.uri);
        return 0;
    }
}