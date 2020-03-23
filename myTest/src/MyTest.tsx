// import { hot } from "react-hot-loader/root";
import { CameraTest } from "./components/CameraTest";
import { Component, ReactNode, createElement } from "react";


export class MyTest extends Component {

    render():ReactNode {
        return (
            <CameraTest/>
        );
    }

}
// export default hot(CameraTest);// CameraTestを変更すると、該当部品をもう一度ビルドする。