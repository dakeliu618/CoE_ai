sap.ui.define([
    "sap/ui/test/opaQunit"
], function (opaTest) {
    "use strict";

    var Journey = {
        run: function() {
            QUnit.module("First journey");

            opaTest("Start application", function (Given, When, Then) {
                Given.iStartMyApp();

                Then.onThezc_vyf_base_2List.iSeeThisPage();

            });


            opaTest("Navigate to ObjectPage", function (Given, When, Then) {
                // Note: this test will fail if the ListReport page doesn't show any data
                
                When.onThezc_vyf_base_2List.onFilterBar().iExecuteSearch();
                
                Then.onThezc_vyf_base_2List.onTable().iCheckRows();

                When.onThezc_vyf_base_2List.onTable().iPressRow(0);
                Then.onThezc_vyf_base_2ObjectPage.iSeeThisPage();

            });

            opaTest("Teardown", function (Given, When, Then) { 
                // Cleanup
                Given.iTearDownMyApp();
            });
        }
    }

    return Journey;
});