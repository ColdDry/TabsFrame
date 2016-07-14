var app = angular.module('tabsApp', []);

app.controller('myCtrl', [function () {
    var own = this;
    own.tab_options = [{ id: 1, title: 'one', content: 'this is one', selected: true },
        { id: 2, title: 'two', content: 'this is two', selected: false }];
    own.setStyle = function (option) {
        var style = {};
        if (option.selected) {
            style = { 'backround-color': 'black' }
        }
        else {
            style = { 'backround-color': 'silver' }
        };
        return style;
    }
    var isShowable = function (option) {

    }
}]);


