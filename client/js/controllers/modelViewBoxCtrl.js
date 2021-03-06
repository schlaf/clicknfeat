'use strict';

angular.module('vassalApp.controllers')
  .controller('modelViewBoxCtrl', [
    '$scope',
    '$state',
    '$stateParams',
    '$http',
    '$q',
    '$window',
    'game',
    'command',
    'factions',
    'modes',
    function($scope,
             $state,
             $stateParams,
             $http,
             $q,
             $window,
             game,
             command,
             factions,
             modes) {
      console.log('init modelViewBoxCtrl');

      $scope.doSetLabel = function() {
        $scope.game.newCommand(command('onSelection', 'setLabel', $scope.model_view.new_label));
        $scope.model_view.new_label = null;
      };
      $scope.doClearLabel = function(index) {
        $scope.game.newCommand(command('onSelection', 'clearLabel', index));
      };
      $scope.doClearAllLabel = function() {
        $scope.game.newCommand(command('onSelection', 'clearAllLabel'));
      };
      $scope.doModelDamage = function(model, col, line) {
        if(!$scope.game.id) return;
        $scope.game.newCommand(command('onSelection', 'toggleDamage', col, line));
      };
      $scope.doResetAllModelDamage = function() {
        $scope.game.newCommand(command('onSelection', 'resetAllDamage'));
      };
    }
  ]);
