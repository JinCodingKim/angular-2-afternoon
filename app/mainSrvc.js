angular.module("devmtnTravel").service("mainSrvc", function($http) {
  this.getTravelInfo = () => {
    return $http.get(
      `https://practiceapi.devmountain.com/api/travel/travel-info`
    );
  };
  this.getPackageInfo = () => {
    return $http.get(
      `http://practiceapi.devmountain.com/api/travel/package-info`
    );
  };
});
