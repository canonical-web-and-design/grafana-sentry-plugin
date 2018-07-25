interface SentryIssue {
    lastSeen: String;
    id: String;
    userCount: number;
    stats: any;
    culprit: string;
    title: string;
    numComments: number;
    assignedTo: any;
    logger: any;
    type: string;
    annotations: any;
    metadata: any;
    status: string;
    subscriptionDetails: any;
    isPublic: boolean;
    permalink: any;
    shortId: string;
    shareId: any;
    firstSeen: string;
    count: number;
    hasSeen: boolean;
    level: string;
    isSubscribed: boolean;
    isBookmarked: boolean;
    project: any;
    statusDetails: any;
}

export { SentryIssue }