import { Component, ReactNode, createElement } from "react";
import { View, Text } from "react-native";
import {RNCamera} from 'react-native-camera';

export class MyTest extends Component {

   /* constructor(props) {
        super(props);
        this.state = {
            moveAnim: new Animated.Value(0)
        };
    }

    componentDidMount() {
        this.startAnimation();
    }

    startAnimation = () => {
        this.state.moveAnim.setValue(0);
        Animated.timing(
            this.state.moveAnim,
            {
                toValue: -200,
                duration: 1500,
                easing: Easing.linear
            }
        ).start(() => this.startAnimation());
    };
    //  识别二维码
    onBarCodeRead = (result) => {
        const { navigate } = props.navigation;
               const {data} = result;
            navigate('Sale', {
                url: data
            })
    };*/

    render():ReactNode {
        return (
            <View>
                <RNCamera
                    /* ref={ref => {
                        camera = ref;
                    }}*/
                    type={RNCamera.Constants.Type.back}
                    /*flashMode={RNCamera.Constants.FlashMode.on}
                    onBarCodeRead={onBarCodeRead}*/
                >
                   <View>
                        <View /*style={styles.rectangle}*//>
                        <Text>将二维码放入框内，即可自动扫描</Text>
                    </View> 
                    </RNCamera>
            </View>
        );
    }

}