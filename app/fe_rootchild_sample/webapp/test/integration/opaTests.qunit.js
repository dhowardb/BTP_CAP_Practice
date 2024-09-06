sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'ferootchildsample/test/integration/FirstJourney',
		'ferootchildsample/test/integration/pages/RootList',
		'ferootchildsample/test/integration/pages/RootObjectPage',
		'ferootchildsample/test/integration/pages/ChildObjectPage'
    ],
    function(JourneyRunner, opaJourney, RootList, RootObjectPage, ChildObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('ferootchildsample') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRootList: RootList,
					onTheRootObjectPage: RootObjectPage,
					onTheChildObjectPage: ChildObjectPage
                }
            },
            opaJourney.run
        );
    }
);