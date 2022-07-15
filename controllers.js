app.controller("mainController", function ($scope) {
    $scope.root = $scope;
    $scope.is_loading = false;
});

app.controller("profilesController", function ($scope, profilesService) {
    $scope.user = null;
    
    $scope.get_user = function (user_id) {
        $scope.root.is_loading = true;
        
        profilesService.get_one(user_id).then(function (response) {
            $scope.root.is_loading = false;
            $scope.user = response.data.users;
        },
        function () {
            console.log('a');
        });
    };
});

app.controller("pollsController", function ($scope, pollsService) {
    $scope.polls = [];
    
    $scope.root.is_loading = true;
    pollsService.get_all().then(function (response) {
        $scope.root.is_loading = false;
        $scope.polls = response.data.polls;
    },
    function () {
    });
});