var @@gadgetName@@Controller = function ($http, $timeout)
{
    var vm = this;

    vm.test3 = "Test3";
    vm.ShowMe = true;

}

@@gadgetName@@Controller.$inject = ["$http", "$timeout"];
app.controller("@@gadgetName@@Controller", @@gadgetName@@Controller);