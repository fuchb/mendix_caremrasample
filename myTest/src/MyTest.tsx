import { CameraTest } from "./components/CameraTest";
import { Component, ReactNode, createElement } from "react";
import { MyTestProps } from "../typings/MyTestProps";
import { Style } from "./utils/common";
//import { TextStyle, ViewStyle } from "react-native";

export class MyTest extends Component<MyTestProps<Style>> {
    private readonly onClickHandler = this.onClick.bind(this);
    render():ReactNode {
        return (
            <CameraTest
            value={this.props.valueAttribute ? this.props.valueAttribute.displayValue : "Default"}
            onClickAction={this.onClickHandler}
            />
        );
    }
    private onClick(): void {
        if (this.props.onClickAction) {
            this.props.onClickAction.execute();
        }
    }
}