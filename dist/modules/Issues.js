System.register(["moment"], function(exports_1) {
    var moment;
    var Issues;
    return {
        setters:[
            function (moment_1) {
                moment = moment_1;
            }],
        execute: function() {
            Issues = (function () {
                function Issues(issues) {
                    this.rawIssues = issues;
                }
                Issues.prototype.query = function (query) {
                    console.log(moment);
                    var request = new XMLHttpRequest();
                    var start = query.range.from;
                    var end = query.range.to;
                    return true;
                };
                return Issues;
            })();
            exports_1("default", Issues);
        }
    }
});
//# sourceMappingURL=Issues.js.map