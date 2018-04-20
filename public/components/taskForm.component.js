(function() {
  const taskForm = {

    templateUrl: "partials/taskForm.html",
    controller: function(TaskService) {
      let vm = this;
      refreshList();
      function refreshList() {
        TaskService.getList().then(function(tasks){
        vm.tasks = tasks;
        });
      }

      vm.addTask = function(task) {
        let newTask = {task: task};
        if (newTask !== "") {
          TaskService.setList(newTask).then(refreshList());
        }

      vm.rmInfo = function(task) {
        TaskService.removeInfo(task.id).then(refreshList());
      }
      };
    }
  };

  angular.module("App")
    .component("taskForm", taskForm);
}());
