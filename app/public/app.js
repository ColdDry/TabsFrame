var app = angular.module('tabsApp', []);

app.controller('myCtrl', [function () {
    var own = this;
    own.tab_options = [
        {
            id: 0, title: 'one', content: 'this is one', selected: true, style: { 'selected': true, 'unselected': false }
        },
        {
            id: 1, title: 'two', content: 'this is two', selected: false, style: { 'selected': false, 'unselected': true }
        },
        {
            id: 2, title: 'three', content: 'this is three', selected: false, style: { 'selected': false, 'unselected': true }
        }
    ];
    own.selectTab = function (id) {
        own.tab_options.forEach(function (value) {
            if (value.id == id) {
                value.selected = true;
                value.style = { 'selected': true, 'unselected': false };
            } else {
                value.selected = false;
                value.style = { 'selected': false, 'unselected': true };
            }
        }, this);
    };
    own.addTab = function () {
        if (own.tab_options.length < 8) {
            own.tab_options.push({
                id: own.tab_options.length, title: own.tab_options.length +1, content: 'this is new', selected: false, style: { 'selected': false, 'unselected': true }
            });
        }
    }

}]);


