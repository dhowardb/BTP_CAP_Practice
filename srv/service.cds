using {zui_rap_capability_test_anno} from './external/zui_rap_capability_test_anno';

service RootService {
    entity Root  as
        select from zui_rap_capability_test_anno.Root {
            ID,
            StringProperty,
            ImageUrl,
            IntegerValue,
            ForecastValue,
            TargetValue,
            Dimensions,
            ProgressIntegerValue,
            StarsValue,
            ContactID,
            CriticalityCode,
            Uom,
            FieldWithQuantity,
            IsoCurrency,
            Country,
            Region,
            NavigationID,
            FieldWithCriticality,
            FieldWithPrice,
            HarveyFieldWithPrice,
            DeleteHidden,
            UpdateHidden,
            FieldWithUrl,
            FieldWithUrlText,
            Email,
            Telephone,
            ValidFrom,
            ValidTo,
            Time,
            Timestamp,
            Description,
            DescriptionCustomGrowing,
            CreatedBy,
            CreatedAt,
            LocalLastChangedBy,
            LocalLastChangedAt,
            LastChangedAt,
            _Child
        }

    entity Child as
        select from zui_rap_capability_test_anno.Child {
            Id,
            ParentId,
            StringProperty,
            FieldWithPercent,
            BooleanProperty,
            CriticalityCode,
            StreamFilename,
            StreamMimetype,
            StreamFile,
            _Root
        }
}
