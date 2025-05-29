sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'coe.ai.vyf.vyf.ai',
            componentId: 'zc_vyf_base_2ObjectPage',
            contextPath: '/zc_vyf_base_2'
        },
        CustomPageDefinitions
    );
});