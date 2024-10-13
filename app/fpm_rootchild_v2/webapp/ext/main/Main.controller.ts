import Controller from "sap/fe/core/PageController";
import ActionListItem from "sap/m/ActionListItem";
import Button, { Button$PressEvent, Button$PressEventParameters } from "sap/m/Button";
import ColumnListItem from "sap/m/ColumnListItem";
import Dialog from "sap/m/Dialog";
import MessageToast from "sap/m/MessageToast";
import SearchField from "sap/m/SearchField";
import TableSelectDialog from "sap/m/TableSelectDialog";
import VBox from "sap/m/VBox";
import Event from "sap/ui/base/Event";
import ManagedObject from "sap/ui/base/ManagedObject";
import FormContainer from "sap/ui/layout/form/FormContainer";
import FormElement from "sap/ui/layout/form/FormElement";
import SimpleForm from "sap/ui/layout/form/SimpleForm";
import Field from "sap/ui/mdc/Field";
import Context from "sap/ui/model/Context";
import Filter from "sap/ui/model/Filter";
import ODataListBinding from "sap/ui/model/odata/v4/ODataListBinding";

/**
 * @namespace fpmrootchild_v2.ext.main
 */
export default class Main extends Controller {

    private _onDialog: Dialog | never | TableSelectDialog;
    private _risksForm: Dialog;
    /**
     * Called when a controller is instantiated and its View controls (if available) are already created.
     * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
     * @memberOf fpmrootchild_v2.ext.main.Main
     */
    // public onInit(): void {
    //     super.onInit(); // needs to be called to properly initialize the page controller
    // }

    /**
     * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
     * (NOT before the first rendering! onInit() is used for that one!).
     * @memberOf fpmrootchild_v2.ext.main.Main
     */
    // public  onBeforeRendering(): void {
    //
    //  }

    /**
     * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
     * This hook is the same one that SAPUI5 controls get after being rendered.
     * @memberOf fpmrootchild_v2.ext.main.Main
     */
    // public  onAfterRendering(): void {
    //
    //  }

    /**
     * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
     * @memberOf fpmrootchild_v2.ext.main.Main
     */
    // public onExit(): void {
    //
    //  }

    public onSampleButton(): void {
        MessageToast.show('Sample Button was pressed')
    }

    public async onShowTable(event: Event): Promise<void> {
        const view = this.getView();
        const context = (event.getSource() as TableSelectDialog).getBindingContext();
        const contextPath = context?.getPath() as string;
        if (!this._onDialog) {
            this._onDialog = await this.getExtensionAPI().loadFragment({
                id: (view?.getId() as string),
                name: "fpmrootchild_v2.ext.dialog.Dialog",
                contextPath: contextPath,
                controller: this
            }) as TableSelectDialog
        }

        // Rebind the dialog element to the new context every time it opens
        this._onDialog.bindElement({
            path: contextPath,
        });

        this._onDialog.setResizable(true);
        this._onDialog.setDraggable(true);
        this._onDialog.addStyleClass('sapUiResponsivePadding--header sapUiResponsivePadding--subHeader sapUiResponsivePadding--content sapUiResponsivePadding--footer')
        this._onDialog.open('');
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
        //No need to handle TableSelectDialog auto closes
        const bindings = (event.getSource() as TableSelectDialog ).getBinding('items');
        (bindings as ODataListBinding).filter([]);
    }

    private handleItemPress(event: Event): void {
        const source = event.getSource() as TableSelectDialog
        const parameters = event.getParameters();
        const selectedItem = event.getParameter('selectedItem' as never) as ColumnListItem;

        //if nothing was selected do nothing
        if (!selectedItem) {
            return;
        }

        const rootValueList = selectedItem.getCells()[0];
        const rootValue = rootValueList.getProperty('text');

        MessageToast.show(`You pressed item with Root Property: ${rootValue}`)

        //Get binding
        // const binding = (event.getSource() as TableSelectDialog).getBinding('items');
        // const contexts = event.getParameter('selectedContexts' as never);

        // const rootValue2 = (contexts as []).map((context: Context) => {
        //     context.getObject().StringProperty
        // })

    }

    private handleSearch(event:Event) : void {
        const value = event.getParameter("value" as never);
        const filterOption = new Filter('StringProperty', "Contains", value);
        const itemsBinding = event.getParameter('itemsBinding' as never);
        (itemsBinding as ODataListBinding).filter(filterOption);
    }

    public async onOpenRisksForm(event: Button$PressEvent) : Promise<void> {
        MessageToast.show('Risks opening...')
        const contextBinding = event.getSource().getBindingContext();
        const contextPath = contextBinding?.getPath() as string;

        if (!this._risksForm){
            this._risksForm = await this.getExtensionAPI().loadFragment({
                id: 'RisksFormDialog',
                name: "fpmrootchild_v2.ext.dialog.RisksForm",
                contextPath: contextPath,
                controller: this
            }) as Dialog
        }

        // Rebind the dialog element to the new context every time it opens
        this._risksForm.bindElement({
            path: contextPath,
        });

        this._risksForm.setResizable(true);
        this._risksForm.setDraggable(true);
        this._risksForm.addStyleClass('sapUiResponsivePadding--header sapUiResponsivePadding--subHeader sapUiResponsivePadding--content sapUiResponsivePadding--footer')
        this._risksForm.open();
    }

    private onSubmitForm(event: Button$PressEvent) : void {
        const data = event.getParameters();

        const risksFormSelected = this._risksForm;
        const content = risksFormSelected.getAggregation('content') as VBox[];
        const items = content[0].getAggregation('items') as ManagedObject[];
        items.forEach((item: ManagedObject) => {
            const form = item.getAggregation('form') as SimpleForm;
            const formContainers = form.getAggregation('formContainers') as FormContainer[];
            const selectedKey = ((formContainers[0].getAggregation('formElements') as FormElement[])[0].getAggregation('fields') as Field[])[0].getProperty('selectedKey');

            MessageToast.show(`You have selected Owner ${selectedKey}`)
        })
    }

    private closeDialog() : void {
        if(this._risksForm){
            this._risksForm.close();
        }
    }
}