///<reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />
System.register(['./modules/api'], function(exports_1) {
    var api_1;
    var ChangeMyNameDatasource;
    return {
        setters:[
            function (api_1_1) {
                api_1 = api_1_1;
            }],
        execute: function() {
            ChangeMyNameDatasource = (function () {
                /** @ngInject */
                function ChangeMyNameDatasource(instanceSettings, backendSrv, templateSrv, $q) {
                    this.backendSrv = backendSrv;
                    this.templateSrv = templateSrv;
                    this.$q = $q;
                    console.log(instanceSettings);
                    this.name = instanceSettings.name;
                    this.id = instanceSettings.id;
                    this.requests = new api_1.default(instanceSettings.jsonData.url, instanceSettings.jsonData.organization, instanceSettings.jsonData.project, instanceSettings.jsonData.token);
                }
                ChangeMyNameDatasource.prototype.query = function (options) {
                    throw new Error("Query Support not implemented yet.");
                };
                ChangeMyNameDatasource.prototype.annotationQuery = function (options) {
                    throw new Error("Annotation Support not implemented yet.");
                };
                ChangeMyNameDatasource.prototype.metricFindQuery = function (query) {
                    throw new Error("Template Variable Support not implemented yet.");
                };
                ChangeMyNameDatasource.prototype.testDatasource = function () {
                    this.requests.getIssues().then(function (value) { console.log(value); });
                    return this.$q.when({
                        status: 'error',
                        message: 'Data Source is just a template and has not been implemented yet.',
                        title: 'Error'
                    });
                };
                return ChangeMyNameDatasource;
            })();
            exports_1("default", ChangeMyNameDatasource);
        }
    }
});
//# sourceMappingURL=datasource.js.map