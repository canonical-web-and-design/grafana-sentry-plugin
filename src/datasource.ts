///<reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />

import _ from 'lodash';
import Requests from './modules/api'

export default class ChangeMyNameDatasource {
  id: number;
  name: string;
  requests: Requests;

  /** @ngInject */
  constructor(instanceSettings, private backendSrv, private templateSrv, private $q) {
    console.log(instanceSettings);
    this.name = instanceSettings.name;
    this.id = instanceSettings.id;

    this.requests = new Requests(
      instanceSettings.jsonData.url, instanceSettings.jsonData.organization, instanceSettings.jsonData.project, instanceSettings.jsonData.token);
  }

  query(options) {
    throw new Error("Query Support not implemented yet.");
  }

  annotationQuery(options) {
    throw new Error("Annotation Support not implemented yet.");
  }

  metricFindQuery(query: string) {
    throw new Error("Template Variable Support not implemented yet.");
  }

  testDatasource() {
    this.requests.getIssues().then(value => { console.log(value) })
    return this.$q.when({
      status: 'error',
      message: 'Data Source is just a template and has not been implemented yet.',
      title: 'Error'
    });
  }
}
