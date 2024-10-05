 export interface Iproduct{
    pname: string;
    pdetails: string;
    pstatus: string;
    id: string;
 }


export enum productstatus{
    inprogress="in progress",
    dispatched="dispatched",
    delivered="delivered"

}