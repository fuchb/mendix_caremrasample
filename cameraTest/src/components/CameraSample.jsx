import { Component, createElement } from "react";
import { Platform, Text, View, Image, CameraRoll } from "react-native";

import { styles } from "../ui/styles";
import {RNCamera} from 'react-native-camera';

const defaultBadgeStyle = {
    container: styles.flex,
    badge: styles.badge,
    label: styles.label
};

export class CameraSample extends Component {
   constructor() {
        super();
        this.setState({
          imagePath: "",
      });
    }
    render() {
        
        return (
            <View>
                <RNCamera
                    style={styles.rectangle}
                    ref={ref => {
                        this.camera = ref;
                    }}
                    mirrorImage={false}
                    captureQuality="medium"
                    type={RNCamera.Constants.Type.back}>
                        <View>
                            <Text style={styles.button} onPress={this.takePicture.bind(this)}>[take photo]</Text>
                             <Image style={{width: 100, height: 100, marginBottom: 20}}
                              ref={ref => {this.myImage = ref;}} 
                              source={{uri: ""}}>
                             </Image>
                        </View> 
                    </RNCamera>
            </View>
        );
    }
    
    takePicture = async() => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      
      CameraRoll.saveToCameraRoll(data.uri);
      /*イメージパス*/
      this.setState({
          imagePath: data.uri,
      });
 
      /*イメージサイズ取得*/
      Image.getSize(data.uri,(width,height) =>{
          console.log(width,height);
      });
    }
  }
}
