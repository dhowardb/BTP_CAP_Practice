import MessageToast from "sap/m/MessageToast";
import TableSelectDialog from "sap/m/TableSelectDialog";
import Event from "sap/ui/base/Event";
import Controller from "sap/ui/core/mvc/Controller";

/**
 * @namespace freestylerootchildsample.controller
 */
export default class Root extends Controller {

    /*eslint-disable @typescript-eslint/no-empty-function*/

    private _onDialog: TableSelectDialog;

    public onInit(): void {

    }

    public async onShowChildTable(event: Event): Promise<void> {
        MessageToast.show('Child Table is pressed!!')

        const contextPath = (event.getSource() as TableSelectDialog).getBindingContext()?.getPath() as string;
        this._onDialog = await this.loadFragment({
            id: (this.getView()?.getId() as string),
            name: 'freestylerootchildsample.fragment.TableDialog',
        }) as TableSelectDialog

        this._onDialog.bindElement({
            path: contextPath
        })

        this._onDialog.setResizable(true);
        this._onDialog.setDraggable(true);
        this._onDialog.addStyleClass('sapUiResponsivePadding--header sapUiResponsivePadding--subHeader sapUiResponsivePadding--content sapUiResponsivePadding--footer')
        this._onDialog.open('');
    }
}