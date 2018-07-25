import { SentryIssue } from "../interfaces/SentryIssue";
import { QueryRequestObj } from "../interfaces/QueryRequestObj";
export default class Issues {
    rawIssues: Array<SentryIssue>;
    constructor(issues: Array<SentryIssue>);
    query(query: QueryRequestObj): boolean;
}
