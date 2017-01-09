angular.module('toDoSystem.home',[])
    .config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/',{
            templateUrl:'app/home/home.html',
            controller:'HomeController'
        })
    }])
    .controller('HomeController',['$scope',
        '$location',
        'taskService',
        function($scope, $location, taskService) {
            $scope.getAllTasks = function () {
                taskService.getAllTasks()
                .then(
                    function success(data){
                        $scope.currentTasks=data
                        $scope.uncompleteTasksCount=data.filter(function(t) {
                            return t.isCompleted === false
                        }).length
                    },
                    function err(err){
                        console.log(err)
                    }
                )
            }
            $scope.getAllTasks()
            $scope.deleteTask= function (taskId) {
                taskService.deleteTask(taskId)
                .then(
                    function success(data){
                        console.log(data)
                    },
                    function err(err){
                        console.log(err)
                    }
                )
            }
            $scope.getUncompletedTasks = function (){
                taskService.getAllActivitiesTasks()
                .then(
                    function success(data){
                        $scope.currentTasks=data
                    },
                    function err(err){
                        console.log(err)
                    }
                )
            }
            $scope.getCompletedTasks = function (){
                taskService.getAllCompletedTasks()
                .then(
                    function success(data){
                        $scope.currentTasks=data
                    },
                    function err(err){
                        console.log(err)
                    }
                )
            }
            $scope.addTask = function (input){
                taskService.createTask(input)
                .then(
                    function success(data){
                        $scope.getAllTasks()
                    },
                    function err(err){
                        console.log(err)
                    }
                )
            }
            $scope.checkTask = function (taskId) {
                taskService.updateTask(taskId,true)
                .then(
                    function success(data){
                        $scope.getAllTasks()    
                    },
                    function err(err){
                        console.log(err)
                    }
                )
            }
            $scope.uncheckTask = function (taskId) {
                taskService.updateTask(taskId,false)
                .then(
                    function success(data){
                        $scope.getAllTasks()    
                    },
                    function err(err){
                        console.log(err)
                    }
                )
            }
    }]);