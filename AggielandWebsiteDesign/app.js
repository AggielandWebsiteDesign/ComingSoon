var app = angular
            .module('AWD-ComingSoon', [])
            .constant('DEBUG_MODE', /*DEBUG_MODE*/true/*DEBUG_MODE*/)
            .constant('VERSION_TAG', /*VERSION_TAG_START*/new Date().getTime()/*VERSION_TAG_END*/);

//
// Angular debug info
//
app.config(function ($compileProvider, DEBUG_MODE) {
    if (!DEBUG_MODE) {
        $compileProvider.debugInfoEnabled(false);// disables AngularJS debug info
    }
});

app.run(['$location', '$rootScope', function ($location, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {

        if (current.hasOwnProperty('$$route')) {

            $rootScope.title = current.$$route.title;
        }
    });
}]);

'use strict';
app.controller('bodyController', ['$scope', '$rootScope', '$location', function ($scope, authService, $rootScope, $location) {


    $scope.clientName = "Client Name";
    $scope.companyName = "Aggieland Website Design.";
    $scope.companySite = "http://aggielandwebsitedesign.com";
    $scope.progressPercent = 24;


    $scope.projectProgressArray = [
        {
            date: "September 1 -",
            text: "Put website progress here"
        },
        {
            date: "September 5 -",
            text: "Put website progress here"
        }
    ];


    $scope.copyrightYear = new Date().getFullYear();

    
    $scope.facebookUrl = "https://www.facebook.com/AggielandWebsiteDesign?fref=ts";
    $scope.twitterUrl = "https://twitter.com/search?src=typd&q=big%20sky%20internet%20design";
    $scope.googlePlusUrl = "https://plus.google.com/109451889369907053037/about";
    $scope.linkedInUrl = "https://www.linkedin.com/profile/view?id=ADEAAAmYwgABULvKwUWhYMsXHNFr7Bmm0HVYLsU&authType=OUT_OF_NETWORK&authToken=59_7&locale=en_US&srchid=1220688731440511722186&srchindex=2&srchtotal=2&trk=vsrp_people_res_name&trkInfo=VSRPsearchId%3A1220688731440511722186%2CVSRPtargetId%3A161006080%2CVSRPcmpt%3Aprimary%2CVSRPnm%3Afalse%2CauthType%3AOUT_OF_NETWORK";
}]);











