import ExtensionAPI from "sap/fe/core/ExtensionAPI";
import Controller from "sap/fe/core/PageController";
import ActionListItem from "sap/m/ActionListItem";
import Button from "sap/m/Button";
import Column from "sap/m/Column";
import ColumnListItem from "sap/m/ColumnListItem";
import Dialog from "sap/m/Dialog";
import Label from "sap/m/Label";
import MessageToast from "sap/m/MessageToast";
import Table from "sap/m/Table";
import TableSelectDialog from "sap/m/TableSelectDialog";
import Text from "sap/m/Text";
import Event from "sap/ui/base/Event";
import Control from "sap/ui/core/Control";
import UI5Element from "sap/ui/core/Element";
import Fragment from "sap/ui/core/Fragment";

/**
 * @namespace fpmrootchild.ext.main
 */
export default class Main extends Controller {

    private _onDialog: Dialog | never | Control[] | Promise<UI5Element | UI5Element[] | Control | Control[]>;
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

    public async onShowTable(event: Event): Promise<void> {
        const button = event.getSource() as Button;
        const view = this.getView();
        const testId = view?.getId();
        const context = (event.getSource() as Button).getBindingContext();
        const contextPath = context?.getPath() as string;
        const model = (event.getSource() as Button).getModel();
        if (!this._onDialog) {
            // this._onDialog = (this.getExtensionAPI() as ExtensionAPI).loadFragment({
            //     // this._onDialog = Fragment.load({
            //     id: (view?.getId() as string),
            //     name: "fpmrootchild.ext.dialog.Dialog",
            //     // controller: this
            // }).then(function (dialog) {
            //     view?.addDependent(dialog);
            //     return dialog;
            // })
            this._onDialog = await this.getExtensionAPI().loadFragment({
                id: (view?.getId() as string),
                name: "fpmrootchild.ext.dialog.Dialog",
                contextPath: contextPath,
                controller: this
            }).then((dialog: Dialog) => {
                view?.addDependent(dialog);
                dialog.setModel(model);
                dialog.bindElement({
                    path: contextPath
                })
                return dialog;
            })
        }

        // Rebind the dialog element to the new context every time it opens
        (this._onDialog as Dialog).bindElement({
            path: contextPath,
        });
        (this._onDialog as Dialog).open();

        // this._onDialog.then(function (dialog: Dialog) {
        //     const context = event.getSource().getBindingContext();
        //     dialog.setBindingContext(context);  // Bind the selected item's context to the dialog
        //     dialog.open();
        // }.bind(this))

        // const extension = this.getExtensionAPI();
        //    const api = (this.getExtensionAPI() as ExtensionAPI).loadFragment({
        //     id: (view?.getId() as string),
        //     name: "fpmrootchild.ext.dialog.Dialog",
        //     controller: this
        //     })
        // const controller = this.getView()?.getController();
        // this._onDialog = extension.loadFragment({
        //     id: (view?.getId() as string),
        //     name: "fpmrootchild.ext.dialog.Dialog",
        // }).then(function(dialog){
        //     return dialog;
        // })
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

    private handleClose(event: Event): void {
        MessageToast.show('Test if this is reached!!');
        if (this._onDialog) {
            // this._onDialog.then(function (dialog: Dialog) {
            //     const context = event.getSource().getBindingContext();
            //     dialog.setBindingContext(context);  // Bind the selected item's context to the dialog
            //     dialog.close();
            // }.bind(this))

            // (this._onDialog as Dialog).destroy();
            // (this._onDialog as Dialog).destroyContent();
            // (this._onDialog as Dialog).close();
        }
        // const source = event.getSource() as Dialog
        // source.close();
        // source.destroy();
    }

    private handleItemPress(event:Event): void {
        const source = event.getSource() as TableSelectDialog
        const parameters = event.getParameters();
    }
}