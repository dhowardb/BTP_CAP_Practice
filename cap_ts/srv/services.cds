using { ZUI_RISKS_MITI_CLOUD_O4 as RisksMitiODataV4 } from './external/ZUI_RISKS_MITI_CLOUD_O4';
namespace sap.cap.risks.miti.ts;

service RisksMitigationService {
    entity Risks as select from RisksMitiODataV4.Mitigations {
        *,
        _Risks
    }
    entity Mitigations as select from RisksMitiODataV4.Risks {
        *,
        _Mitigation
    }
}
