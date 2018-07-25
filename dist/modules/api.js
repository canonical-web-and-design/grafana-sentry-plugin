System.register([], function(exports_1) {
    var Requests;
    return {
        setters:[],
        execute: function() {
            Requests = (function () {
                function Requests(sentryUrl, organizationName, projectName, token) {
                    this.token = token;
                    this.apiUrl = sentryUrl + "/api/0/project/" + organizationName + "/" + projectName + "/issues";
                }
                Requests.prototype.request = function () {
                    var xhttp = new XMLHttpRequest();
                    xhttp.open("GET", this.apiUrl);
                    xhttp.setRequestHeader("Authorization", this.token);
                    xhttp.withCredentials = true;
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