angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  $scope.title = "Foobar";
  $scope.social = [
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/barrydandrea"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/SalemeInsServ"
    }
  ];
})


.controller('PlaylistCtrl', function($scope, $stateParams) {
});
