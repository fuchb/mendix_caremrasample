import { Component, ReactNode, createElement } from "react";
import { View, CameraRoll, TouchableOpacity, Text, Dimensions } from "react-native";
import {RNCamera} from 'react-native-camera';
import { styles } from "../ui/styles";

interface IProps {
}

// 状態構造体宣言
interface IState {
    isPreview: boolean
}
export class CameraTest extends Component<IProps, IState> {
    private camera:any;
    constructor(props : IState) {
        super(props);
        this.state = {
            isPreview: false,
        };
    }
     render():ReactNode {
        return (
            <View style={styles.container}>
                {this._renderCameraView()}
                {this._renderBottomView()}
            </View>
        );
    };

    _renderTakePhotoButton = () => {
        var {width, height} = Dimensions.get('window');
        const style = {
            bottom: (height - 210) * -1,
            left: width / 2 - 30
        }
        return (
            <TouchableOpacity
                onPress={this._clickTakePicture.bind(this)}
                style={[styles.myButton, style]}
            >
                <Text/>
            </TouchableOpacity>
        );
    };

    _renderSwitchCamera = () => {
        var {width, height} = Dimensions.get('window');
        const style = {
            bottom: (height -190) * -1,
            left: width - 140
        }
        return (
            <TouchableOpacity
                onPress={this._clickSwitchCamera.bind(this)}
                style={ style }
            >
                <Text style={styles.switchCamera}>カメラ切り替え</Text>
            </TouchableOpacity>
        );
    };

    private _renderBottomView = () => {
        return (
            <View style={styles.bottom}>
                {this._renderSwitchCamera()}
                {this._renderTakePhotoButton()}
            </View>
        );
    };

    private _renderCameraView = () => {
        return (
            <RNCamera
                ref={cam => this.camera = cam}
                style={styles.camera}
                type={this.state.isPreview ? RNCamera.Constants.Type.front : RNCamera.Constants.Type.back}
            />
        );
    };
    
    private async _clickTakePicture():  Promise<number> {
        
        var options: any = { quality: 0.5, base64: true };
        //　写真を撮る
        const data = await this.camera.takePictureAsync(options);
        // 撮影した写真をローカルに格納する。
        CameraRoll.saveToCameraRoll(data.uri);
        console.log(data.uri);
        return 0;
    };

    private _clickSwitchCamera = () => {
        this.setState({isPreview: !this.state.isPreview});
    };
}