import Controller from "sap/fe/core/PageController";
import ActionListItem from "sap/m/ActionListItem";
import Button from "sap/m/Button";
import Column from "sap/m/Column";
import ColumnListItem from "sap/m/ColumnListItem";
import Dialog from "sap/m/Dialog";
import Label from "sap/m/Label";
import MessageToast from "sap/m/MessageToast";
import Table from "sap/m/Table";
import Text from "sap/m/Text";
import Event from "sap/ui/base/Event";

/**
 * @namespace fpmrootchild.ext.main
 */
export default class Main extends Controller {

    private _onDialog: Dialog | never;
    /**
     * Called when a controller is instantiated and its View controls (if available) are already created.
     * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
     * @memberOf fpmrootchild.ext.main.Main
     */
    // public onInit(): void {
    //     super.onInit(); // needs to be called to properly initialize the page controller
    // }

    /**
     * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
     * (NOT before the first rendering! onInit() is used for that one!).
     * @memberOf fpmrootchild.ext.main.Main
     */
    // public  onBeforeRendering(): void {
    //
    //  }

    /**
     * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
     * This hook is the same one that SAPUI5 controls get after being rendered.
     * @memberOf fpmrootchild.ext.main.Main
     */
    // public  onAfterRendering(): void {
    //
    //  }

    /**
     * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
     * @memberOf fpmrootchild.ext.main.Main
     */
    // public onExit(): void {
    //
    //  }

    public onSampleButton(): void {
        MessageToast.show('Sample Button was pressed')
    }

    public onShowTable(event: Event): void {
        const table = new Table({
            itemPress: () => this._onListItemPress(event),
            columns:
                [new Column({
                    header: new Label({ text: "Column 1" })
                }),
                new Column({
                    header: new Label({ text: "Column 2" })

                }),
                new Column({
                    header: new Label({ text: "Column 3" })
                })
                ],
        })

        const template = new ColumnListItem({
            cells: [
                new Text({text: "{FieldWithPercent}"}),
                new Text({text: "{StringProperty}"}),
                new Text({text: "{ParentId}"})
            ]
        })

        table.bindItems({
            path: '/_Child',
            template: template
        })

        this._onDialog = new Dialog({
            title: "Sample Table from List Report",
            resizable: true,
            contentWidth: "550px",
            contentHeight: "300px",
            content: [table
            ],
            beginButton: new Button({
                text: "Begin Button",
                press: () => MessageToast.show('Pressed')
            }),
            endButton: new Button({
                text: "Cancel",
                press: () => this._onDialog.close()
            })
        })

        if (this._onDialog) {
            this._onDialog.open();
        }
    }

    public onActionList(event: Event): void {
        const parameters = event.getParameters();
        const properties = event.getSource() as ActionListItem;
        const text = properties.getProperty('text');
        MessageToast.show(`Action List Field Value: ${text}`);
    }

    private _onListItemPress(event: Event): void {
        const parameters = event.getParameters();
        const properties = event.getSource() as ActionListItem;
        // const text = properties.getProperty('text');
        MessageToast.show(`List Item pressed: `);
    }
}