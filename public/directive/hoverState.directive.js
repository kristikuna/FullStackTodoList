(function() {
    function hoverState() {
        return {
            link: function($scope, $element, $attrs) {
                $element.on("mouseover", function() {
                    $element.css('background-color', '#eee');
                    $element.css('border-radius', '10px');
                    $element.children().css('color', '#ff0000');
                });
                $element.on("mouseout", function() {
                    $element.css('background-color', '#fff');
                    $element.css('border','none')
                    $element.children().css('color', 'black');

                });
            }
        }
    }
    angular
        .module("App")
        .directive("hoverState", hoverState);
}());
