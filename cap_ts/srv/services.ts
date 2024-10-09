import { Risks, Mitigations } from '#cds-models/ZUI_RISKS_MITI_CLOUD_O4';
import { Request, ApplicationService, Query, predicate, connect } from '@sap/cds';

export class RisksMitigationService extends ApplicationService {

    init() {
        const { Risks, Mitigations } = this.entities;

        this.on('READ', Risks, async (req: Request) => { 
            const backEndConnection = await connect.to('ZUI_RISKS_MITI_CLOUD_O4');
            req.reply(await backEndConnection.run(req.query)); 
        } )

        this.on('READ', Mitigations, async (req: Request) => {
            const backEndConnection = await connect.to('ZUI_RISKS_MITI_CLOUD_O4');
            req.reply(await backEndConnection.run(req.query));
        } )

        return super.init();
    }
}

module.exports = RisksMitigationService;