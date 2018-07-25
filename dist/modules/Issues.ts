import { SentryIssue } from "../interfaces/SentryIssue";
import { QueryRequestObj } from "../interfaces/QueryRequestObj";
import { QueryResponseObj } from "../interfaces/QueryResponseObj";
import * as moment from "moment";

export default class Issues {
    rawIssues: Array<SentryIssue>;

    constructor(issues: Array<SentryIssue>) {
        this.rawIssues = issues;
    }

    query(query:QueryRequestObj):boolean {
        console.log(moment);

        const request = new XMLHttpRequest();
        const start = query.range.from;
        const end = query.range.to;

        return true;
    }
}