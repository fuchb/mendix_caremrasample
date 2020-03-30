import { Component, createElement } from "react";
import classNames from "classnames";
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

export class BadgeSample extends Component {
    
    render() {
        function handleTakePhoto (dataUri) {
            // Do stuff with the photo...
            //console.log('takePhoto');
            alert(dataUri);
            var image = document.getElementById('myImage');
            image.src = dataUri;
          };
          
        return (
            <div>
                <Camera
                onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }/>
            <img id={"myImage"}/>
        </div>
        );
    }
}
