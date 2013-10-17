'use strict';

angular.module('arena2App')
  .controller('ArenaData', function ($scope, $http) {

    $scope.showAddGame = false;

    $scope.calculatedDiff = function(){
        var percentWon = $scope.calculatedDiffPercent();

        if(percentWon >= 75){
          return 'Easy';
        }
        else if (percentWon < 75 && percentWon >= 50){
            return 'Medium';
        }
        else if(percentWon < 50 && percentWon >= 10){
          return 'Hard';
        }

        return 'Very Hard';

    }

    $scope.calculatedDiffPercent = function(){
        var totalGames = $scope.data.wins + $scope.data.loss;
        var percentWon = ($scope.data.wins / totalGames) * 100;
        return percentWon.toFixed(2);
    }


    $scope.addComment = function(event){
      $scope.data.comments.push({user:'David', date : '2:00am 12/12/2013', comment: $('.new-comment').val()});
      $('.new-comment').val("")
    };

  	$scope.data = {
    		diff:'Medium',
    		classes:[{
    			class:'Priest',
    			spec:'Shadow',
    			killTarget:true
    		},{
    			class:'Hunter',
    			spec:'Survival',
    			killTarget:false
    		},{
    			class:'Warrior',
    			spec:'Arms',
    			killTarget:false	
    		}],
    		wins:60,
    		loss:5,
        comments:[
            { 
                user:'Richard',
                date:'12:00am 12/12/2013',
                comment:'How about we try and find the healer next time?'
            },
            { 
                user:'David',
                date:'12:00am 12/12/2013',
                comment:'How about we try and find the healer next time?'
            }
        ]
    	};
  });
