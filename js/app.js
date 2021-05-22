var myApp = angular.module('myApp', []);

myApp.controller('myController', function($scope) {
    console.log("In myContoller...");

    $scope.newUser = {};
    $scope.checkedUser = {};
    $scope.message = "";

    $scope.users = [
        { ID: "1", FNAME: "Vedant", LNAME: "Desai", MATH: 90, SCI: 95, ENG: 85 }

    ];
    $scope.saveUser = function() {
        $scope.users.push($scope.newUser);
        $scope.newUser = {};
        $scope.message = "STUDENT Added Successful";
    };

    $scope.selectUser = function(user) {
        console.log(user);
        $scope.clickedUser = user;
    };

    $scope.updateUser = function(user) {

    };

    $scope.deleteUser = function() {
        $scope.users.splice($scope.users.indexOf($scope.clickedUser), 1);
    };
});