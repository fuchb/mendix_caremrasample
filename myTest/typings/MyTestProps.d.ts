/**
 * This file was generated from MyTest.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Team
 */
import { ActionValue, EditableValue } from "mendix";

interface CommonProps<Style> {
    name: string;
    style: Style[];
}

export interface MyTestProps<Style> extends CommonProps<Style> {
    valueAttribute?: EditableValue<string | BigJs.Big>;
    onClickAction?: ActionValue;
}
