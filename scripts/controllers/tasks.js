'use strict';

angular.module('myApp')

.controller('TasksCtrl', function($scope, $firebase) {

    var fireRef = new Firebase('https://pulse-app.firebaseio.com/tasks');

    $scope.todos = $firebase(fireRef);

    $scope.newTodo = {
        points: 0
    };

    $scope.create = function() {
        $scope.todos.$add({
            title: $scope.newTodo.title,
            points: $scope.newTodo.points,
            completed: false
        });
        $scope.newTodo.title = '';
        $scope.newTodoForm.$setPristine(true);
    };

    $scope.todos.$on('change', function() {

        console.log($scope.todos);

        var points = 0;
        var completed = 0;

        $scope.todos.$getIndex().forEach(function(index) {
            var todo = $scope.todos[index];
            if (todo.completed) {
                points += todo.points;
                completed += 1;
            };
        });

        $scope.remaining = function() {
            var count = 0;
            angular.forEach($scope.todos, function(todo) {
                count += todo.done ? 0 : 1;
            });
            return count;
        };

        $scope.points = points;
        $scope.completed = completed;
        $scope.total = $scope.todos.$getIndex().length;

    });

});
