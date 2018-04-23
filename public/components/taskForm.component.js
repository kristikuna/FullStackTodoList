(function() {
  const taskForm = {

    templateUrl: "partials/taskForm.html",
    controller: function(TaskService) {
      const vm = this;
      refreshList();

      function refreshList() {
        TaskService.getList().then(function(tasks) {
          vm.tasks = tasks;
        });
      }

      vm.addTask = function(task) {
        let newTask = {
          task: task
        };
        if (task) {
          TaskService.setList(newTask).then(refreshList());
          vm.task = "";
        }
      }

      vm.rmInfo = function(task) {
        TaskService.removeInfo(task.id).then(refreshList());
        console.log("clicked from delete!");
      }

      vm.editTask = function(task) {
        TaskService.updateTask(task, task.id).then(refreshList());
        console.log("clicked from edit!");
      }

    }
  };

  angular.module("App")
    .component("taskForm", taskForm);
}());
