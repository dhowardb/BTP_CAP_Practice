// This is an automatically generated file. Please do not change its contents manually!
import cds from '@sap/cds'
import * as __ from './../../../../../../_';

export class RisksMitigationService extends cds.Service {
}
export default RisksMitigationService

export function _RiskAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Risk extends Base {
    declare Uuid?: __.Key<string>
    declare Description?: string
    declare Owner?: string
    declare _Risks?: __.Association.to.many<Mitigations>
      static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
      declare static readonly actions: Record<never, never>
      declare static readonly keys: __.KeysOf<Risk>
  };
}
export class Risk extends _RiskAspect(__.Entity) {}
Object.defineProperty(Risk, 'name', { value: 'sap.cap.risks.miti.ts.RisksMitigationService.Risks' })
Object.defineProperty(Risk, 'is_singular', { value: true })
export class Risks extends Array<Risk> {$count?: number}
Object.defineProperty(Risks, 'name', { value: 'sap.cap.risks.miti.ts.RisksMitigationService.Risks' })

export function _MitigationAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Mitigation extends Base {
    declare Uuid?: __.Key<string>
    declare Title?: string
    declare Owner?: string
    declare Description?: string
    declare MitiUuid?: string
    declare Impact?: number
    declare _Mitigation?: __.Association.to<Risk> | null
    declare _Mitigation_Uuid?: __.Key<string> | null
      static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
      declare static readonly actions: Record<never, never>
      declare static readonly keys: __.KeysOf<Mitigation>
  };
}
export class Mitigation extends _MitigationAspect(__.Entity) {}
Object.defineProperty(Mitigation, 'name', { value: 'sap.cap.risks.miti.ts.RisksMitigationService.Mitigations' })
Object.defineProperty(Mitigation, 'is_singular', { value: true })
export class Mitigations extends Array<Mitigation> {$count?: number}
Object.defineProperty(Mitigations, 'name', { value: 'sap.cap.risks.miti.ts.RisksMitigationService.Mitigations' })
