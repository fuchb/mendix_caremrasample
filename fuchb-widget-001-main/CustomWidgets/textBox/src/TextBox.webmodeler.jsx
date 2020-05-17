import { Component, createElement } from "react";
import { TextInput } from "./components/TextInput";

export class preview extends Component {
    render(){
        return <TextInput value={this.props.textAttribute} />;
    }
}

export function getPreviewCss() {
    return require("./ui/TextBox.css");
}

