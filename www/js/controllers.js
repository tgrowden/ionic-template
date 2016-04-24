angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  $scope.title = "Foobar";
  $scope.externalLink = function(url) {
    window.open(url, '_self', 'location=yes'); 
    return false;
  };
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
});
