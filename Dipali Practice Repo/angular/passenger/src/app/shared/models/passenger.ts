export interface Ipassenger {
[x: string]: any;
    
    id: number;
    fullname: string;
    checkedIn: boolean;
    checkInDate?: number | null;
    children?: iChild[] | null;
  }
  interface iChild {
    name: string;
    age: number;
  }




