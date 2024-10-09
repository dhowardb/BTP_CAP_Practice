// This is an automatically generated file. Please do not change its contents manually!
import cds from '@sap/cds'
import * as __ from './../_';

export class ZUI_RISKS_MITI_CLOUD_O4 extends cds.Service {
}
export default ZUI_RISKS_MITI_CLOUD_O4

export function _MitigationAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Mitigation extends Base {
    declare Uuid?: __.Key<string>
    declare Description?: string
    declare Owner?: string
    declare _Risks?: __.Association.to.many<Risks>
      static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
      declare static readonly actions: Record<never, never>
      declare static readonly keys: __.KeysOf<Mitigation>
  };
}
export class Mitigation extends _MitigationAspect(__.Entity) {}
Object.defineProperty(Mitigation, 'name', { value: 'ZUI_RISKS_MITI_CLOUD_O4.Mitigations' })
Object.defineProperty(Mitigation, 'is_singular', { value: true })
export class Mitigations extends Array<Mitigation> {$count?: number}
Object.defineProperty(Mitigations, 'name', { value: 'ZUI_RISKS_MITI_CLOUD_O4.Mitigations' })

export function _RiskAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Risk extends Base {
    declare Uuid?: __.Key<string>
    declare Title?: string
    declare Owner?: string
    declare Description?: string
    declare MitiUuid?: string
    declare Impact?: number
    declare _Mitigation?: __.Association.to<Mitigation> | null
    declare _Mitigation_Uuid?: __.Key<string> | null
      static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
      declare static readonly actions: Record<never, never>
      declare static readonly keys: __.KeysOf<Risk>
  };
}
export class Risk extends _RiskAspect(__.Entity) {}
Object.defineProperty(Risk, 'name', { value: 'ZUI_RISKS_MITI_CLOUD_O4.Risks' })
Object.defineProperty(Risk, 'is_singular', { value: true })
export class Risks extends Array<Risk> {$count?: number}
Object.defineProperty(Risks, 'name', { value: 'ZUI_RISKS_MITI_CLOUD_O4.Risks' })
