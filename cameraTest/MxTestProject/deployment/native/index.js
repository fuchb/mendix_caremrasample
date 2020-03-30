import { NativeUI, startApp, t } from "mendix/native";
import { navigationStyle } from "E:/workspace/src/mendix/webTest/cameraTest/dist/MxTestProject/theme/styles.js";

startApp({
    "languages": [
        "en_US"
    ],
    "systemTexts": {
        "mendix.lib.MxDataSource.status": [
            "{1} to {2} of {3}"
        ],
        "reporting.widget.ReportParameter.all": [
            "All"
        ],
        "reporting.widget.ReportParameter.less_than": [
            "Less than {1}"
        ],
        "reporting.widget.ReportParameter.greater_than": [
            "Greater than {1}"
        ],
        "mendix.lib.Validations.invalid_date": [
            "Invalid date"
        ],
        "mendix.lib.Validations.invalid_number": [
            "Invalid number"
        ],
        "reporting.widget.ReportMatrix.excel_btn_caption": [
            "Export to Excel"
        ],
        "mendix.lib.Validations.invalid_attribute": [
            "Value '{1}' is not valid for field {2}."
        ],
        "reporting.widget.ReportParameter.from_to": [
            "From {1} to {2}"
        ],
        "mendix.signin.username": [
            "User name"
        ],
        "mendix.signin.password": [
            "Password"
        ],
        "mendix.signin.loginButton": [
            "Sign in"
        ],
        "mendix.signin.http401": [
            "The username or password you entered is incorrect."
        ],
        "mendix.signin.http404": [
            "Server not found."
        ],
        "mendix.signin.http500": [
            "An internal server error occurred."
        ],
        "mendix.signin.http503": [
            "Service unavailable."
        ],
        "mendix.signin.httpdefault": [
            "Sign in failed."
        ],
        "mendix.lib.Validations.required_field": [
            "This field is required."
        ],
        "mendix.lib.Validations.value_too_long": [
            "Value too long."
        ],
        "mendix.signin.http402": [
            "The current license does not allow more users to sign in."
        ],
        "mendix.signin.http460": [
            "You were signed out, because you signed in somewhere else."
        ],
        "mendix.signin.http419": [
            "Your session has expired. Please enter your user name and password to continue working."
        ],
        "mendix.lib.Validations.range_decimal": [
            "Decimal values may contain no more than 20 digits before and 8 digits behind the decimal point."
        ],
        "mendix.lib.Validations.range_integer": [
            "This number is too big."
        ],
        "mendix.lib.Validations.range_long": [
            "This number is too big."
        ],
        "mendix.signin.goHomeButton": [
            "Back to Homepage"
        ],
        "mendix.signin.http403": [
            "You don't have enough permissions to access this page. You may try to login as a different user."
        ],
        "mxui.common.true": [
            "Yes"
        ],
        "mxui.common.false": [
            "No"
        ],
        "mxui.widget.DataGrid.no_selection": [
            "No selection available."
        ],
        "mxui.widget.DataGrid.confirm_delete": [
            "Delete {1} items?"
        ],
        "mxui.widget.DataGrid.search": [
            "Search"
        ],
        "mxui.widget.DataGrid.reset": [
            "Reset"
        ],
        "mxui.widget.DataGrid.waitForSearch": [
            "Please enter one or more search criteria."
        ],
        "mxui.widget.DialogMessage.info": [
            "Information"
        ],
        "mxui.widget.DialogMessage.warning": [
            "Warning"
        ],
        "mxui.widget.DialogMessage.error": [
            "Error"
        ],
        "mxui.widget.FileInput.incorrect_extension": [
            "You can only upload files of the following types here: {1}."
        ],
        "mxui.widget.DialogMessage.ok": [
            "OK"
        ],
        "mxui.widget.ListView.load_more": [
            "Load more..."
        ],
        "mxui.widget.ListView.search": [
            "Search"
        ],
        "mxui.widget.ListView.no_items": [
            "No items found"
        ],
        "mxui.widget.FileInput.download": [
            "Download"
        ],
        "mxui.widget.FileInput.upload": [
            "Browse..."
        ],
        "mxui.sys.UI.connection_error": [
            "A connection error occurred, please try again later."
        ],
        "mxui.widget.DataView.validation_error": [
            "One or more input fields contain an invalid value."
        ],
        "mxui.widget.FileInput.file_too_large": [
            "The size of the selected file ({1}MB) is larger than the maximum size ({2}MB)."
        ],
        "mxui.widget.ReferenceSelector.clean_confirmation": [
            "Are you sure you want to clear this reference?"
        ],
        "mxui.widget.TabContent.hidden_validations": [
            "Tab {1} contains validation errors but is invisible."
        ],
        "mxui.sys.UI.internal_error": [
            "An error occurred, please contact your system administrator."
        ],
        "mxui.widget.SelectBox.itemsSelected": [
            "{1} items selected"
        ],
        "mxui.sys.UI.sync_error": [
            "Your changes cannot be synchronized at this moment. They will be synchronized later."
        ],
        "mendix.signin.cancel": [
            "Cancel"
        ],
        "mxui.widget.DatePicker.open_datepicker": [
            "Show date picker"
        ],
        "mxui.widget.DialogMessage.cancel": [
            "Cancel"
        ],
        "mxui.widget.DialogMessage.file_download": [
            "Download file"
        ],
        "mxui.widget.DialogMessage.file_download_message": [
            "Are you sure you want to download this file?"
        ],
        "mxui.widget.ConfirmationDialog.caption": [
            "Confirmation"
        ],
        "mxui.sys.UI.confirm_delete": [
            "Are you sure you want to delete this?"
        ],
        "mendix.lib.Validations.invalid_value": [
            "This value is not valid."
        ],
        "mendix.lib.MxDataSource.status_without_size": [
            "{1} to {2}"
        ],
        "mxui.widget.SearchInput.empty_dropdown_value": [
            "(empty)"
        ],
        "mxui.widget.native.ModalDialog.close": [
            "Done"
        ],
        "mxui.widget.DropDownButton.close_button": [
            "Close"
        ],
        "mxui.widget.Grid.a11y.first_page": [
            "Go to first page"
        ],
        "mxui.widget.Grid.a11y.previous_page": [
            "Go to previous page"
        ],
        "mxui.widget.Grid.a11y.next_page": [
            "Go to next page"
        ],
        "mxui.widget.Grid.a11y.last_page": [
            "Go to last page"
        ],
        "mxui.widget.Grid.a11y.page_status": [
            "Currently showing"
        ],
        "mxui.widget.Grid.a11y.navigation_aria_label": [
            "Pagination"
        ],
        "mxui.widget.native.Navigation.back": [
            "Back"
        ],
        "mxui.widget.ReferenceSetSelector.confirm_remove_references": [
            "Are you sure you want to remove {1} references?"
        ],
        "mxui.widget.ReferenceSetSelector.confirm_remove_reference": [
            "Are you sure you want to remove this reference?"
        ]
    },
    "navigationStyle": navigationStyle,
    "getTabs": () => ( [
        {
            "pageName": "NativeMobile.Home_Native",
            "caption": t( [
                "Home"
            ] ),
            "icon": {
                "type": "glyph",
                "iconClass": "glyphicon-home"
            }
        }
    ] ),
    "onStartupNativeClient": () => {
        NativeUI.registerPage("NativeMobile.Home_Native", require("E:/workspace/src/mendix/webTest/cameraTest/dist/MxTestProject/deployment/native/pages/NativeMobile.Home_Native"), {"sidebar":false,"headerRegionName":"placeholder$Header","showBottomBar":true,"type":"Default"});
        NativeUI.registerPage("NativeMobile.Login", require("E:/workspace/src/mendix/webTest/cameraTest/dist/MxTestProject/deployment/native/pages/NativeMobile.Login"), {"sidebar":false,"headerRegionName":"placeholder$Header","showBottomBar":true,"type":"Default"});
    }
});