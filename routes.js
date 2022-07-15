app.config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "templates/home.html"
    })
    .when("/profiles", {
        templateUrl: "templates/profiles.html"
    })
    .when("/polls", {
        templateUrl: "templates/polls.html"
    });
});