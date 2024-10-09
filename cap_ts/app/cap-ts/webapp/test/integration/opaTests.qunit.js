sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'capts/test/integration/FirstJourney',
		'capts/test/integration/pages/RisksList',
		'capts/test/integration/pages/RisksObjectPage',
		'capts/test/integration/pages/MitigationsObjectPage'
    ],
    function(JourneyRunner, opaJourney, RisksList, RisksObjectPage, MitigationsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('capts') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRisksList: RisksList,
					onTheRisksObjectPage: RisksObjectPage,
					onTheMitigationsObjectPage: MitigationsObjectPage
                }
            },
            opaJourney.run
        );
    }
);