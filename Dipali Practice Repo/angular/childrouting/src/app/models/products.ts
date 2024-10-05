export interface Iproduct{
    pname: string;
    pid: string;
    pstatus: string;
    canreturn: number;
}

export type pstatus="in-progress"| "dispatched" | "delivered";