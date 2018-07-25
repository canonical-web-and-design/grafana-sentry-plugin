import { QueryRange } from "./QueryRange";
import { Target } from "./Target";

interface QueryRequestObj {
    range: QueryRange;
    interval: string;
    targets: Array<Target>;
    format: string;
    maxDataPoints: number
}

export { QueryRequestObj }