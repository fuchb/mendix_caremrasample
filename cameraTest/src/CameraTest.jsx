import { Component, createElement } from "react";
import { hot } from "react-hot-loader/root";

import { BadgeSample } from "./components/BadgeSample";
import "./ui/CameraTest.css";

class CameraTest extends Component {
    constructor(props) {
        super(props);

        this.onClickHandler = this.onClick.bind(this);
    }

    render() {
        return (
            <BadgeSample
            />
        );
    }

    onClick() {
        if (this.props.onClickAction && this.props.onClickAction.canExecute) {
            this.props.onClickAction.execute();
        }
    }
}

export default hot(CameraTest);
