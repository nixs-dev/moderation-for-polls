app.service("profilesService", function ($http) {
    let token = "a6686e78b543ee15512d81ca87720b8f8aa3e2d6";
    let headers = {
        Authorization: `Token ${token}`
    };

    this.get_one = function (user_id) {
        return $http.get("http://127.0.0.1:8000/api/private/users", {
                headers: headers,
                params: {
                    "user_id": user_id
                }
            }
        );
    };
});

app.service("pollsService", function ($http) {
    let token = "a6686e78b543ee15512d81ca87720b8f8aa3e2d6";
    let headers = {
        Authorization: `Token ${token}`
    };

    this.get_all = function () {
        return $http.get("http://127.0.0.1:8000/api/private/polls", {
                headers: headers
            }
        );
    };
});