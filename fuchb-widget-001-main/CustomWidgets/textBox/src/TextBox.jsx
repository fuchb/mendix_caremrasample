import { Component, ReactNode, createElement } from "react";
import { hot } from "react-hot-loader/root";


import { TextInput } from "./components/TextInput";

import "./ui/TextBox.css";

class TextBox extends Component {
    render(){
        const value = "11111";
        return <TextInput value={value} />;
    }
}

export default hot(TextBox);