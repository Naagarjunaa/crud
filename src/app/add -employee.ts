export class AddEmployee{
constructor(
  public  id : number,
  public  name : string,
  public  gender : string,
  public email : string,
  public phoneNumber : number,
  public department : string
){}
}

export const dataArray=[];

export class Department{
    id:string;
    name:string;
}
