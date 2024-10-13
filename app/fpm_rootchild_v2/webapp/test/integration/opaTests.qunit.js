sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'fpmrootchild/test/integration/FirstJourney',
		'fpmrootchild/test/integration/pages/RootMain'
    ],
    function(JourneyRunner, opaJourney, RootMain) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('fpmrootchild') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRootMain: RootMain
                }
            },
            opaJourney.run
        );
    }
);