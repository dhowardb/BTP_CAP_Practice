using RootService as service from '../../srv/service';

annotate RootService.Root with {
    StringProperty @Common: {Label: 'Semantic Meaning', }
};

annotate RootService.Root with @(UI.PresentationVariant: {
    SortOrder     : [{
        Property  : StringProperty,
        Descending: false,
    }],
    Visualizations: ['@UI.LineItem'],
});

annotate RootService.Root with @(UI.Facets: [{
    $Type : 'UI.ReferenceFacet',
    Target: '_Child/@UI.LineItem',
    Label : 'Child Table',
    ID    : 'Child',
}, ]);


annotate RootService.Root with @(

    Common            : {SemanticKey: [StringProperty]},
    UI.SelectionFields: [StringProperty],
    UI.LineItem       : [
        {
            $Type: 'UI.DataField',
            Value: ID,
            Label: 'Root ID',
        },
        {
            $Type: 'UI.DataField',
            Value: StringProperty,
            Label: 'Semantic Key',
        },
        {
            $Type: 'UI.DataField',
            Value: IntegerValue,
            Label: 'Value',
        },
        {
            $Type : 'UI.DataField',
            Value : _Child.Id,
            Label : 'Child ID',
        },
        {
            $Type: 'UI.DataField',
            Value: _Child.StringProperty,
            Label: 'Child Property',
        },
    ]
);

annotate RootService.Child with @(

UI.LineItem: [
    {
        $Type: 'UI.DataField',
        Value: Id,
        Label: 'ID',
    },
    {
        $Type: 'UI.DataField',
        Value: ParentId,
        Label: 'Root ID',
    },
    {
        $Type: 'UI.DataField',
        Value: StringProperty,
        Label: 'Property'
    },
    {
        $Type: 'UI.DataField',
        Value: StreamFilename,
        Label: 'File Name',
    },
]);
