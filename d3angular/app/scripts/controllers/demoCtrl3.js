(function () {
  'use strict';

  angular.module('myApp.controllers')
    .controller('DemoCtrl3', ['$scope', function($scope){

    	$scope.person = {};

    	$scope.addChild = function() {
    		//$scope.d3Data
    		console.log('here');
    		console.log($scope.person);

    		var child = {"id": 333, "firstname": "Phillip", "lastname": "Morris", "shortname": "", "children": []};

    		if ($scope.person.children && Array.IsArray($scope.person.children)) {
    			$scope.person.children.push(child);
    		} else {
    			$scope.person.children = [child];
    		}

    		console.log($scope.person);
    		console.log($scope.d3Data);
    	};

    	$scope.getDetails = function(d) {
    		console.log(d);
    		$scope.person = d;
    		//$scope.person.firstname = d.firstname;
    		//$scope.person.lastname = d.lastname;
    		console.log($scope.person);
    		$scope.$digest();
    	};

      $scope.d3Data = {"id": 999, "firstname": "Department", "lastname": "", "shortname": "", "children": [   {"id": 1, "firstname": "Hugo", "lastname": "Miller", "shortname": "", "children": [ {"id": 2, "firstname": "Richard", "lastname": "Miller", "shortname": "Rich", "children": [ {"id": 11, "firstname": "Douglas", "lastname": "Miller", "shortname": "Doug", "children": [ {"id": 16, "firstname": "Courtney", "lastname": "Miller", "shortname": "", "children": []}, {"id": 17, "firstname": "Heidi", "lastname": "Miller", "shortname": "", "children": []}]}, {"id": 12, "firstname": "Paul", "lastname": "Miller", "shortname": "", "children": []}, {"id": 13, "firstname": "David", "lastname": "Miller", "shortname": "", "children": []}, {"id": 14, "firstname": "Daniel", "lastname": "Miller", "shortname": "Dan", "children": [ {"id": 21, "firstname": "Richard", "lastname": "Miller", "shortname": "", "children": []}]}, {"id": 15, "firstname": "Diane", "lastname": "Flor", "shortname": "", "children": [ {"id": 18, "firstname": "Darcy", "lastname": "Miller", "shortname": "", "children": []}, {"id": 19, "firstname": "Darlene", "lastname": "Miller", "shortname": "", "children": []}, {"id": 20, "firstname": "Donna", "lastname": "Miller", "shortname": "", "children": []}]}]}]}, {"id": 100, "firstname": "Hugo", "lastname": "Miller", "shortname": "", "children": [ {"id": 200, "firstname": "Richard", "lastname": "Miller", "shortname": "Rich", "children": [ {"id": 110, "firstname": "Douglas", "lastname": "Miller", "shortname": "Doug", "children": [ {"id": 160, "firstname": "Courtney", "lastname": "Miller", "shortname": "", "children": []}, {"id": 170, "firstname": "Heidi", "lastname": "Miller", "shortname": "", "children": []}]}, {"id": 120, "firstname": "Paul", "lastname": "Miller", "shortname": "", "children": []}, {"id": 130, "firstname": "David", "lastname": "Miller", "shortname": "", "children": []}, {"id": 140, "firstname": "Daniel", "lastname": "Miller", "shortname": "Dan", "children": [ {"id": 210, "firstname": "Richard", "lastname": "Miller", "shortname": "", "children": []}]}, {"id": 150, "firstname": "Diane", "lastname": "Flor", "shortname": "", "children": [ {"id": 180, "firstname": "Darcy", "lastname": "Miller", "shortname": "", "children": []}, {"id": 190, "firstname": "Darlene", "lastname": "Miller", "shortname": "", "children": []}, {"id": 220, "firstname": "Donna", "lastname": "Miller", "shortname": "", "children": []}]}]}]}  ]};


      //$scope.d3Data = {"id": 1, "firstname": "Hugo", "lastname": "Miller", "shortname": "", "children": [ {"id": 2, "firstname": "Richard", "lastname": "Miller", "shortname": "Rich", "children": [ {"id": 11, "firstname": "Douglas", "lastname": "Miller", "shortname": "Doug", "children": [ {"id": 16, "firstname": "Courtney", "lastname": "Miller", "shortname": "", "children": []}, {"id": 17, "firstname": "Heidi", "lastname": "Miller", "shortname": "", "children": []}]}, {"id": 12, "firstname": "Paul", "lastname": "Miller", "shortname": "", "children": []}, {"id": 13, "firstname": "David", "lastname": "Miller", "shortname": "", "children": []}, {"id": 14, "firstname": "Daniel", "lastname": "Miller", "shortname": "Dan", "children": [ {"id": 21, "firstname": "Richard", "lastname": "Miller", "shortname": "", "children": []}]}, {"id": 15, "firstname": "Diane", "lastname": "Flor", "shortname": "", "children": [ {"id": 18, "firstname": "Darcy", "lastname": "Miller", "shortname": "", "children": []}, {"id": 19, "firstname": "Darlene", "lastname": "Miller", "shortname": "", "children": []}, {"id": 20, "firstname": "Donna", "lastname": "Miller", "shortname": "", "children": []}]}]}]};


      //$scope.d3Data = {"id": 1, "firstname": "Hugo", "lastname": "Miller", "middlename": "", "shortname": "", "maidenname": "", "namesuffix": "", "gendermf": "M", "avatarsrc": "person0.jpg", "marriedyno": "Y", "spousename": "Grandma", "spousegendermf": "F", "spousetreeid": "", "spouseavatarsrc": "person0.jpg", "birthdate": "", "deathdate": "1950-01-01", "address": "", "city": "", "state": "", "zip": "", "phone_home": "", "phone_mobile": "", "phone_work": "", "email": "", "facebook_username": "", "children": [ {"id": 2, "firstname": "Richard", "lastname": "Miller", "shortname": "Rich", "maidenname": "", "namesuffix": "", "gendermf": "M", "avatarsrc": "person0.jpg", "marriedyno": "Y", "spousename": "Barb", "spousegendermf": "F", "spouseavatarsrc": "person0.jpg", "birthdate": "", "deathdate": "", "children": [ {"id": 11, "firstname": "Douglas", "lastname": "Miller", "shortname": "Doug", "maidenname": "", "namesuffix": "", "gendermf": "M", "avatarsrc": "person0.jpg", "marriedyno": "Y", "spousename": "Karen", "spousegendermf": "F", "spouseavatarsrc": "person0.jpg", "birthdate": "", "deathdate": "", "children": [ {"id": 16, "firstname": "Courtney", "lastname": "Miller", "shortname": "", "maidenname": "", "namesuffix": "", "gendermf": "F", "avatarsrc": "person0.jpg", "marriedyno": "N", "spousename": "", "spousegendermf": "", "spouseavatarsrc": "", "birthdate": "", "deathdate": "", "children": []}, {"id": 17, "firstname": "Heidi", "lastname": "Miller", "shortname": "", "maidenname": "", "namesuffix": "", "gendermf": "F", "avatarsrc": "person0.jpg", "marriedyno": "N", "spousename": "", "spousegendermf": "", "spouseavatarsrc": "", "birthdate": "", "deathdate": "", "children": []}]}, {"id": 12, "firstname": "Paul", "lastname": "Miller", "shortname": "", "maidenname": "", "namesuffix": "", "gendermf": "M", "avatarsrc": "person0.jpg", "marriedyno": "N", "spousename": "", "spousegendermf": "", "spouseavatarsrc": "", "birthdate": "", "deathdate": "", "children": []}, {"id": 13, "firstname": "David", "lastname": "Miller", "shortname": "", "maidenname": "", "namesuffix": "", "gendermf": "", "avatarsrc": "person0.jpg", "marriedyno": "N", "spousename": "", "spousegendermf": "", "spouseavatarsrc": "", "birthdate": "", "deathdate": "", "children": []}, {"id": 14, "firstname": "Daniel", "lastname": "Miller", "shortname": "Dan", "maidenname": "", "namesuffix": "", "gendermf": "M", "avatarsrc": "person0.jpg", "marriedyno": "Y", "spousename": "Kathy", "spousegendermf": "F", "spouseavatarsrc": "person0.jpg", "birthdate": "", "deathdate": "", "children": [ {"id": 21, "firstname": "Richard", "lastname": "Miller", "shortname": "", "maidenname": "", "namesuffix": "", "gendermf": "M", "avatarsrc": "person0.jpg", "marriedyno": "N", "spousename": "", "spousegendermf": "", "spouseavatarsrc": "", "birthdate": "", "deathdate": "", "children": []}]}, {"id": 15, "firstname": "Diane", "lastname": "Flor", "shortname": "", "maidenname": "", "namesuffix": "", "gendermf": "F", "avatarsrc": "person0.jpg", "marriedyno": "Y", "spousename": "Jeff", "spousegendermf": "M", "spouseavatarsrc": "person0.jpg", "birthdate": "", "deathdate": "", "children": [ {"id": 18, "firstname": "Darcy", "lastname": "Miller", "shortname": "", "maidenname": "", "namesuffix": "", "gendermf": "F", "avatarsrc": "person0.jpg", "marriedyno": "N", "spousename": "", "spousegendermf": "", "spouseavatarsrc": "", "birthdate": "", "deathdate": "", "children": []}, {"id": 19, "firstname": "Darlene", "lastname": "Miller", "shortname": "", "maidenname": "", "namesuffix": "", "gendermf": "F", "avatarsrc": "person0.jpg", "marriedyno": "N", "spousename": "", "spousegendermf": "", "spouseavatarsrc": "", "birthdate": "", "deathdate": "", "children": []}, {"id": 20, "firstname": "Donna", "lastname": "Miller", "shortname": "", "maidenname": "", "namesuffix": "", "gendermf": "F", "avatarsrc": "person0.jpg", "marriedyno": "Y", "spousename": "??", "spousegendermf": "M", "spouseavatarsrc": "person0.jpg", "birthdate": "", "deathdate": "", "children": []}]}]}]};

    }]);

}());
