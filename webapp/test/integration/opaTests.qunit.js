sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'coe/ai/vyf/vyf/ai/test/integration/FirstJourney',
		'coe/ai/vyf/vyf/ai/test/integration/pages/zc_vyf_base_2List',
		'coe/ai/vyf/vyf/ai/test/integration/pages/zc_vyf_base_2ObjectPage'
    ],
    function(JourneyRunner, opaJourney, zc_vyf_base_2List, zc_vyf_base_2ObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('coe/ai/vyf/vyf/ai') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThezc_vyf_base_2List: zc_vyf_base_2List,
					onThezc_vyf_base_2ObjectPage: zc_vyf_base_2ObjectPage
                }
            },
            opaJourney.run
        );
    }
);