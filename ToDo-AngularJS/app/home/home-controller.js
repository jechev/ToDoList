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
            $scope.currentFilter=$scope.currentFilter || 'All'

            $scope.addTask = function (input){
                taskService.createTask(input)
                .then(
                    function success(data){
                        callCurrentFilter($scope.currentFilter)  
                    },
                    function err(err){
                        console.log(err)
                    }
                )
            }

            $scope.getAllTasks = function () {
                taskService.getAllTasks()
                .then(
                    function success(data){
                        $scope.currentFilter='All'
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

            $scope.getUncompletedTasks = function (){
                taskService.getAllActivitiesTasks()
                .then(
                    function success(data){
                        $scope.currentFilter='Uncompleted'
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

            $scope.getCompletedTasks = function (){
                taskService.getAllCompletedTasks()
                .then(
                    function success(data){
                        $scope.currentFilter='Completed'
                        $scope.currentTasks=data
                        taskService.getAllTasks()
                        .then(
                            function success(data){
                                $scope.uncompleteTasksCount=data.filter(function(t) {
                                return t.isCompleted === false
                                }).length
                            },
                            function err(err) {
                                console.log(err)
                            }
                        )
                    },
                    function err(err){
                        console.log(err)
                    }
                )
            }

            $scope.deleteTask= function (taskId) {
                taskService.deleteTask(taskId)
                .then(
                    function success(data){
                        callCurrentFilter($scope.currentFilter)
                        console.log(data)
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
                        callCurrentFilter($scope.currentFilter)   
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
                        callCurrentFilter($scope.currentFilter)
                           
                    },
                    function err(err){
                        console.log(err)
                    }
                )
            }
            function callCurrentFilter(filter){
                if(filter==='All'){
                    return $scope.getAllTasks()
                }
                if(filter==='Uncompleted'){
                    return $scope.getUncompletedTasks()
                }
                if(filter==='Completed'){
                    return $scope.getCompletedTasks()
                }
            }
    }]);