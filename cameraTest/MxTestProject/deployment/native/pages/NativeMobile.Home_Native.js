import { createElement } from "react";
const React = { createElement };


import { asPluginWidgets, t } from "mendix/native";

import { mainContent, sidebar } from "E:/workspace/src/mendix/webTest/cameraTest/dist/MxTestProject/deployment/native/layouts/Atlas_UI_Resources.NativePhone_Default.js";

import * as styles from "E:/workspace/src/mendix/webTest/cameraTest/dist/MxTestProject/theme/styles.js";

const placeholder$Main = () => null;

export const placeholder$Header = () => null;

export const $$title = t([
    "Home"
] );

export const $$style = [ styles.Layout, styles.Page ];

export const $$page = () => mainContent(placeholder$Main);

export const $$sidebar = () => sidebar(placeholder$Main);

