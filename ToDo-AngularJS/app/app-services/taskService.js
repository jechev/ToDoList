'use strict'

angular.module('toDoSystem.app-services.taskService',[])
    .factory('taskService',[
        '$http',
        '$q',
        'BASE_URL',
        function($http, $q, BASE_URL){
            function getAllTasks(){
                var deferred = $q.defer()
                $http.get(BASE_URL + 'all')
                    .success(function (data){
                        deferred.resolve(data)
                    }).error(function (err){
                        deferred.reject(err)
                    })
                    return deferred.promise
            }

            function getAllActivitiesTasks(){
                var deferred = $q.defer()
                $http.get(BASE_URL + 'activities')
                    .success(function (data){
                        deferred.resolve(data)
                    }).error(function (err){
                        deferred.reject(err)
                    })
                    return deferred.promise
            }

            function getAllCompletedTasks(){
                var deferred = $q.defer()
                $http.get(BASE_URL + 'completed')
                    .success(function (data){
                        deferred.resolve(data)
                    }).error(function (err){
                        deferred.reject(err)
                    })
                    return deferred.promise
            }

            function createTask(data){
                var deferred = $q.defer()
                $http.post(BASE_URL,data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
                .success(function (data){
                        deferred.resolve(data)
                    }).error(function (err){
                        deferred.reject(err)
                    })
                    return deferred.promise
            }
            
            function deleteTask(taskId){
                var deferred = $q.defer()
                $http.post(BASE_URL + 'delete/' + taskId,null, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
                .success(function (data){
                    deferred.resolve(data)
                }).error(function (err){
                    deferred.reject(err)
                })
                return deferred.promise
            }
            function updateTask(taskId,isCompleted){
                var deferred = $q.defer()
                console.log(isCompleted)
                $http.post(BASE_URL + 'update/' + taskId,isCompleted,{ headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
                .success(function (data){
                    deferred.resolve(data)
                }).error(function (err){
                    deferred.reject(err)
                })
                return deferred.promise
            }
            
            return {
              getAllTasks : getAllTasks,
              getAllActivitiesTasks : getAllActivitiesTasks,
              getAllCompletedTasks : getAllCompletedTasks,
              createTask: createTask,
              deleteTask: deleteTask,
              updateTask: updateTask,
              create: function(todoData){
                  return $http.post(BASE_URL,todoData)
              }
            }
        }
    ])