angular
  .module("devmtnTravel")
  .controller("packagesCtrl", function($scope, $stateParams, mainSrvc) {
    mainSrvc.getPackageInfo().then(function(response) {
      $scope.allPackages = response.data;
      $scope.packageCountry = $stateParams.country;

      //   $scope.packages = $scope.allPackages.filter(e => {
      //     return e.country === $stateParams.country;
      //   });
    });
  });
