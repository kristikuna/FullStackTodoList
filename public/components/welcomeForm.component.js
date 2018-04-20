(function() {
  var welcomeForm = {
    template: `
    <div class = "welcomeContainer">
    <h1>Welcome to TODO</h1>
    <p>Do more. Increase your productivity with a simple to do app.</p>
    <a id="enterButton" href="#!/taskForm"/>Enter!<i id="arrow" class="material-icons">arrow_forward</i></a>
    </div>
    `
  };
    angular
      .module("App")
      .component("welcomeForm", welcomeForm);
}());
