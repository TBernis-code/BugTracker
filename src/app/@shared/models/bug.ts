export interface Bug {
    _id: number;
    title: string;
    description: string;
    status: BugStatus;
}

export enum BugStatus {
    Open = "open",
    inProgress = "in-progress",
    Fixed = "fixed"
}

