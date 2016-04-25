angular.module('starter.controllers', [])
  .controller('AppCtrl', function($scope, $ionicModal, $timeout) {
    $scope.title = "Foobar"; // Edit
    $scope.externalLink = function(url) {
      window.open(url, '_self', 'location=yes');
      return false;
    };
    $scope.social = [
      {
        name: "Facebook",
        url: "https://facebook.com/"
      },
      {
        name: "Google+",
        url: "https://plus.google.com/"
      },
      {
        name: "Linkedin",
        url: "https://linkedin.com/"
      },
      {
        name: "Twitter",
        url: "https://twitter.com/"
      }
    ];
  });
