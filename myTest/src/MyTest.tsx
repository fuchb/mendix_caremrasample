import { CameraTest } from "./components/CameraTest";
import { Component, ReactNode, createElement } from "react";
import { MyTestProps } from "../typings/MyTestProps";
import { Style } from "./utils/common";

export class MyTest extends Component<MyTestProps<Style>> {
    render():ReactNode {
        return (
            <CameraTest/>
        );
    }
}