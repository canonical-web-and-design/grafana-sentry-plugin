System.register([], function(exports_1) {
    var Requests;
    return {
        setters:[],
        execute: function() {
            Requests = (function () {
                function Requests(sentryUrl, organizationName, projectName, token) {
                    this.token = token;
                    this.apiUrl = "http://0.0.0.0:5000/?token=" + token;
                }
                Requests.prototype.request = function () {
                    var xhttp = new XMLHttpRequest();
                    xhttp.open("GET", this.apiUrl);
                    xhttp.setRequestHeader("Authorization", "Bearer " + this.token);
                    return new Promise(function (resolve, reject) {
                        xhttp.onload = function () {
                            if (this.status >= 200 && this.status < 400) {
                                resolve(JSON.parse(this.response));
                            }
                        };
                        xhttp.send();
                    });
                };
                Requests.prototype.getIssues = function () {
                    var _this = this;
                    return new Promise(function (resolve, reject) {
                        _this.request()
                            .then(resolve)
                            .catch(function (error) { throw new Error("Request failed"); });
                    });
                };
                return Requests;
            })();
            exports_1("default", Requests);
        }
    }
});
//# sourceMappingURL=api.js.map