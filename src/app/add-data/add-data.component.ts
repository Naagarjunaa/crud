import { Component, OnInit } from '@angular/core';
import { dataArray , AddEmployee, Department} from '../add -employee';
import { Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';  


@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {

  employeeModel= new AddEmployee(null,null,null,null,null,null);
    
    departments: Department[]=[
      {id:'HR', name:'HR'},
      {id:'BA', name:'BA'},
      {id:'QA', name:'QA'},
      {id:'IT', name:'IT'}
    ]
   
  constructor(private router: Router , private toastr: ToastrService) { }

  saveEmployee(employeeForm){
   
    dataArray.push(employeeForm.value);
    this.router.navigate(["showData"]);
  } 
  showToaster(){
    this.toastr.success("Form is submitted..")
}
  ngOnInit() {
  }

}
