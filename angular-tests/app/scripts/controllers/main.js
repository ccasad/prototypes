'use strict';

/**
 * @ngdoc function
 * @name angularTestsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTestsApp
 */
angular.module('angularTestsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.showAdvisors = false;

    /*
    $scope.treedata = [
	    { "label": "Bob Jenkins", "role": "Certified Advisor", "imgsrc": "guy1.jpg", "id": "role1", "children": [
        { "label": "<available>", "role": "Advising Support Staff", "imgsrc": "user_blank.jpg", "id": "role11", "children": [] },
        { "label": "Amanda Bansky", "role": "Advising Support Staff", "imgsrc": "girl3.jpg", "id": "role12", "children": [
          { "label": "Jennifer Flowers", "role": "Student Peer Advisor", "imgsrc": "girl6.jpg", "id": "role121", "children": []}
        ]}
	    ]},
	    { "label": "Sally Worth", "role": "Certified Advisor", "imgsrc": "girl4.jpg", "id": "role2", "children": [
	    	{ "label": "Jimmy Winters", "role": "Advising Support Staff", "imgsrc": "guy2.jpg", "id": "role11", "children": [] },
        { "label": "<available>", "role": "Advising Support Staff", "imgsrc": "user_blank.jpg", "id": "role12", "children": [
          { "label": "<available>", "role": "Student Peer Advisor", "imgsrc": "user_blank.jpg", "id": "role121", "children": []}
        ]}
	    ] },
	    { "label": "Geena Davidson", "role": "Certified Advisor", "imgsrc": "girl5.jpg", "id": "role3", "children": [] }
		];
		*/

		$scope.treedata = [
	    { "label": "Unoccupied", "role": "Certified Advisor", "imgsrc": "user_blank.jpg", "id": "role1", "children": [
        { "label": "Unoccupied", "role": "Advising Support Staff", "imgsrc": "user_blank.jpg", "id": "role11", "children": [] },
        { "label": "Unoccupied", "role": "Advising Support Staff", "imgsrc": "user_blank.jpg", "id": "role12", "children": [
          { "label": "Unoccupied", "role": "Student Peer Advisor", "imgsrc": "user_blank.jpg", "id": "role121", "children": []}
        ]}
	    ]},
	    { "label": "Unoccupied", "role": "Certified Advisor", "imgsrc": "user_blank.jpg", "id": "role2", "children": [
	    	{ "label": "Unoccupied", "role": "Advising Support Staff", "imgsrc": "user_blank.jpg", "id": "role11", "children": [] },
        { "label": "Unoccupied", "role": "Advising Support Staff", "imgsrc": "user_blank.jpg", "id": "role12", "children": [
          { "label": "Unoccupied", "role": "Student Peer Advisor", "imgsrc": "user_blank.jpg", "id": "role121", "children": []}
        ]}
	    ] },
	    { "label": "Unoccupied", "role": "Certified Advisor", "imgsrc": "user_blank.jpg", "id": "role3", "children": [] }
		];

		$scope.advisors = [
			{"id": 1, "firstname": "Ella", "lastname": "Morgan", "imgsrc": "girl1.jpg"},
			{"id": 2, "firstname": "Gabriel", "lastname": "Butler", "imgsrc": "girl2.jpg"},
			{"id": 3, "firstname": "Jerry", "lastname": "Hunter", "imgsrc": "guy1.jpg"},
			{"id": 4, "firstname": "Arianna", "lastname": "Walker", "imgsrc": "girl3.jpg"},
			{"id": 5, "firstname": "Neil", "lastname": "Roberston", "imgsrc": "guy2.jpg"},
			{"id": 6, "firstname": "Connor", "lastname": "Gomez", "imgsrc": "guy3.jpg"},
			{"id": 7, "firstname": "Charlene", "lastname": "Pierce", "imgsrc": "girl4.jpg"},
			{"id": 8, "firstname": "Zoe", "lastname": "Jacobs", "imgsrc": "girl5.jpg"},
			{"id": 9, "firstname": "Vincent", "lastname": "Hanson", "imgsrc": "guy4.jpg"},
			{"id": 10, "firstname": "Freddy", "lastname": "Evans", "imgsrc": "guy5.jpg"}
		];


  });
