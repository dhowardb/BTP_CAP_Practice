sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'capts',
            componentId: 'MitigationsObjectPage',
            contextPath: '/Risks/_Risks'
        },
        CustomPageDefinitions
    );
});