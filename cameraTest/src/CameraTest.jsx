import { Component, createElement } from "react";

import { CameraSample } from "./components/CameraSample";

export class CameraTest extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <CameraSample/>
        );
    }
}
