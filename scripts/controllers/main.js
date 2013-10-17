'use strict';

angular.module('arena2App')
  .controller('MainCtrl', function ($scope, $http) {

  	var myRootRef = new Firebase('https://davidboyne.firebaseio.com/');

	myRootRef.update({first : 'Fred', last : 'Swanson'});

  	$scope.selectedClasses = [];
  	$scope.disableClassSelection = false;
  	$scope.handleItemClick = function(obj, event){
  		if(($('.selected').length >= 3 && !$(event.currentTarget).hasClass('selected')) || $(event.currentTarget).hasClass('disabled')){
  			return;
  		}

  		obj.enabled = !obj.enabled;

  		var count = 0;
  		for(var i = 0; i < $scope.classesGroup1.length; i++){
  			if($scope.classesGroup1[i].enabled){
  				count++;
  			}
  		}

  		for(var i = 0; i < $scope.classesGroup2.length; i++){
  			if($scope.classesGroup2[i].enabled){
  				count++;
  			}
  		}

  		$scope.disableClassSelection = (count == 3);

  	};
    $scope.classesGroup1 = [
	    {
	    	class:'Priest',
	    	specs:['Shadow', 'Holy', 'Disc'],
	    	classKey:'Pr',
	    	selectedSpec:'Shadow'
	    },
	     {
	    	class:'Shaman',
	    	specs:['Elemental', 'Restoration', 'Enhancement'],
	    	classKey:'Pr',
	    	selectedSpec:'Elemental'
	    },
	     {
	    	class:'Warlock',
	    	specs:['Affliction', 'Demonology', 'Destruction'],
	    	classKey:'Pr',
	    	selectedSpec:'Affliction'
	    },
	    {
	    	class:'Hunter',
	    	specs:['Beast Mastery', 'Marksmanship', 'Survival'],
	    	classKey:'Pr',
	    	selectedSpec: 'Beast Mastery'
	    },
	    {
	    	class:'Warrior',
	    	spec:'Shadow',
	    	specs:['Arms', 'Fury', 'Protection'],
	    	classKey:'Wa',
	    	selectedSpec:'Arms'
	    }
    ];

    $scope.classesGroup2 = [ {
	    	class:'Death Knight',
	    	spec:'Shadow',
	    	specs:['Blood', 'Frost', 'Unholy'],
	    	classKey:'De',
	    	selectedSpec:'Blood'
	    },
	    {
	    	class:'Druid',
	    	spec:'Shadow',
	    	specs:['Restoration', 'Feral', 'Guardian'],
	    	classKey:'Dr',
	    	selectedSpec:'Restoration'
	    },
	    {
	    	class:'Mage',
	    	spec:'Shadow',
	    	specs:['Arcane', 'Fire', 'Frost'],
	    	classKey:'Ma',
	    	selectedSpec:'Arcane'
	    },
	    {
	    	class:'Rogue',
	    	spec:'Shadow',
	    	specs:['Assassination', 'Subtlety', 'Combat'],
	    	classKey:'Ro',
	    	selectedSpec: 'Assassination'
	    },
	    {
	    	class:'Paladin',
	    	spec:'Shadow',
	    	specs:['Retribution', 'Holy', 'Protection'],
	    	classKey:'Pa',
	    	selectedSpec: 'Retribution'
	    }];

    $scope.searchForArenaInformation = function(){
    	//TODO: get key and make request

    	var classKeys = [];
    	var specKeys = [];

    	var allClasses = angular.copy($scope.classesGroup1);

    	for(var i = 0; i < $scope.classesGroup2.length; i++){
    		allClasses.push($scope.classesGroup2[i]);
    	}

    	//TODO: get the selected values.
    	for(var i = 0; i < allClasses.length; i++){
    		if(allClasses[i].enabled){
    			var cKey = allClasses[i]["class"].slice(0, 2);
    			var specKey = cKey + allClasses[i].selectedSpec.slice(0, 2);
    			//TODO: get selected spec from dropdown!
    			classKeys.push(cKey);
    			specKeys.push(specKey);
    		}
    	}

    	var classKey = classKeys.sort().join("");
    	var specKey = specKeys.sort().join("");

    	console.log(classKey);

    	console.log(specKey);

    }
  });
