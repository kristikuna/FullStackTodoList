(function() {
  function TaskService($http) {

    // var todoList = {};

    return {
      getList: getList,
      setList: setList,
      removeInfo: removeInfo
    }

    function getList() {
      return $http({
        method: "GET",
        url: "/tasks"
      }).then(function(response) {
        return response.data;
      });
    };

    function setList(item) {
      return $http({
         method: "POST",
         url: "/tasks",
         data: item
     });
   };

   function removeInfo(itemId){
     return $http({
       method: "DELETE",
       url: "/tasks/" + itemId
     })
   }
    // function removeInfo(index) {
    //   todoList.splice(index, 1);
    //   console.log("clicked");
    // }

  }
  angular
    .module("App")
    .factory("TaskService", TaskService);
}());
