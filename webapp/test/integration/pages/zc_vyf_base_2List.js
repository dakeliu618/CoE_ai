sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'coe.ai.vyf.vyf.ai',
            componentId: 'zc_vyf_base_2List',
            contextPath: '/zc_vyf_base_2'
        },
        CustomPageDefinitions
    );
});