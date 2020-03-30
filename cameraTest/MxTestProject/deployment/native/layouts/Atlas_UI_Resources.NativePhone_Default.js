import { createElement } from "react";
const React = { createElement };

import { StyleProperty } from "mendix/StyleProperty";

import { com_mendix_widget_native_feedback_Feedback } from "externalWidgets";
import { Placeholder } from "mendix/Placeholder";
import { asPluginWidgets, t } from "mendix/native";

import * as styles from "E:/workspace/src/mendix/webTest/cameraTest/dist/MxTestProject/theme/styles.js";

const { $com_mendix_widget_native_feedback_Feedback, $Placeholder } = asPluginWidgets({ com_mendix_widget_native_feedback_Feedback, Placeholder });

export const mainContent = (placeholder$Main) => [
    <$com_mendix_widget_native_feedback_Feedback key="0_0"
        $widgetId="0_0"
        name="feedback1"
        allowScreenshot={true}
        sprintrapp={"a6b6de48-cce7-4168-a11d-bc6783b7a2f8"}
        logo={undefined}
        style={StyleProperty({
            styles: [ styles.com_mendix_widget_native_feedback_Feedback ]
        })} />,
    <$Placeholder key="0_1"
        $widgetId="0_1"
        name="Main"
        content={placeholder$Main()} />
];

export const sidebar = (placeholder$Main) => [];

