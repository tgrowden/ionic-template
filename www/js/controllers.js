angular.module('starter.controllers', [])
  .controller('AppCtrl', function($scope, $ionicModal, $timeout) {
    $scope.title = "Foobar"; // set
    $scope.adminEmail = "foo@bar.com"; //set
    $scope.social = [  //set
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
    $scope.externalLink = function(url) {
      window.open(url, '_system');
      return false;
    };
    $scope.sendEmail = function() {
      var email = {
        app: 'mailto',
        to: $scope.adminEmail,
        subject: "New email from " + $scope.title + " app"
      };
      window.cordova.plugins.email.open(email);
    };
  });
