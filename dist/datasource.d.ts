/// <reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />
import Requests from './modules/api';
export default class ChangeMyNameDatasource {
    private backendSrv;
    private templateSrv;
    private $q;
    id: number;
    name: string;
    requests: Requests;
    /** @ngInject */
    constructor(instanceSettings: any, backendSrv: any, templateSrv: any, $q: any);
    query(options: any): void;
    annotationQuery(options: any): void;
    metricFindQuery(query: string): void;
    testDatasource(): any;
}
