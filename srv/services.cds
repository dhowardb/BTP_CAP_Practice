using {ZUI_RISKS_MITI_CLOUD_O4} from './external/ZUI_RISKS_MITI_CLOUD_O4';

service RiskService {
    entity Risks       as
        select from ZUI_RISKS_MITI_CLOUD_O4.Risks {
            Uuid,
            Title,
            Owner,
            Description,
            MitiUuid,
            Impact,
            _Mitigation 
        };

    entity Mitigations as
        select from ZUI_RISKS_MITI_CLOUD_O4.Mitigations {
            Uuid,
            Description,
            Owner,
            _Risks
        };


}
