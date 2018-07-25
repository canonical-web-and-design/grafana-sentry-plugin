export default class Requests {
    apiUrl: string;
    token: string;
    constructor(sentryUrl: string, organizationName: string, projectName: string, token: string);
    private request();
    getIssues(): Promise<{}>;
}
