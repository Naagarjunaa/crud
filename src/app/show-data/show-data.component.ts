import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router} from '@angular/router';
import { Department } from '../add -employee';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit {
  public parentData = [];
  isActivate:boolean;
  newdata;
  p: number = 1;

  departments: Department[]=[
    {id:'HR', name:'HR'},
    {id:'BA', name:'BA'},
    {id:'QA', name:'QA'},
    {id:'IT', name:'IT'}
  ]
  constructor(private dataService: DataService, private route : Router) { }

  ngOnInit() {
    this.parentData = this.dataService.getData();
    
  }
  onDelete(i){
    this.parentData.splice(i,1);
  }
  onUpdate(data){
    this.isActivate=true;
    this.newdata=data;
    console.log("update"); 
  }
  updated(i){
    this.isActivate=false;
  }

  key: string = 'name'; 
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }
  toggleTitle(){
    $('.title').slideToggle(); 
  }
}
