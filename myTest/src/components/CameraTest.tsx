import { Component, ReactNode, createElement } from "react";
import { View, Text, CameraRoll } from "react-native";
import {RNCamera} from 'react-native-camera';
import { styles } from "../ui/styles";
//import { BadgeStyle } from "../MyTest";

export interface CameraTestProps {
    value?: string;
    //style: BadgeStyle[];
    onClickAction?: () => void;
}

export class CameraTest extends Component<CameraTestProps> {
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
                    type={this.props.value == "F" ? RNCamera.Constants.Type.front : RNCamera.Constants.Type.back}
                    >
                   <View>
                        <Text style={styles.rectangleText} onPress={this.takePicture.bind(this)}>[Take Photo]</Text>
                    </View> 
                    </RNCamera>
            </View>
        );
    }
    private async takePicture():  Promise<number> {
        
        var options: any = { quality: 0.5, base64: true };
        //　写真を撮る
        const data = await this.camera.takePictureAsync(options);
        // 撮影した写真をローカルに格納する。
        CameraRoll.saveToCameraRoll(data.uri);
        if (this.props.onClickAction) {
            this.props.onClickAction();
        }
        console.log(data.uri);
        return 0;
    }
}