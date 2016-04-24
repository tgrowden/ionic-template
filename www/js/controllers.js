angular.module('starter.controllers', [])
  .controller('AppCtrl', function($scope, $ionicModal, $timeout) {
    $scope.title = "Foobar"; // Edit
    $scope.externalLink = function(url) {
      window.open(url, '_self', 'location=yes');
      return false;
    };
    $scope.social = [
      {
        name: "Linkedin",
        url: "#"
      },
      {
        name: "Twitter",
        url: "#"
      }
    ];
  });
