import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: any[] = [];

  constructor() {
    this.employees=[
      {empId: "101", empName:"Abhishek", gender:"Male", title:"Software Developer",salary:"80000", department:"1",address:"Hyderabad",dob:"01/01/1986"}, 
      {empId: "102", empName:"Amita", gender:"Female", title:"Team Lead",salary:"80000", department:"2",address:"Chennai",dob:"01/01/1985"}, 
      {empId: "103", empName:"Ram", gender:"Male", title:"Tech Lead",salary:"80000", department:"3",address:"Delhi",dob:"01/01/1988"}, 
      {empId: "104", empName:"Golu", gender:"Male", title:"UI Developer",salary:"90000", department:"4",address:"Hyderabad",dob:"01/01/1986"}, 
      {empId: "105", empName:"Nitish", gender:"Male", title:"Software Developer",salary:"70000", department:"5",address:"Bangalore",dob:"01/01/1986"},
      {empId: "106", empName:"Mukesh", gender:"Male", title:"Software Developer",salary:"180000", department:"1",address:"Pune",dob:"01/01/1986"}, 
      {empId: "107", empName:"Sagar", gender:"Male", title:"Software Developer",salary:"110000", department:"1",address:"Pune",dob:"01/01/1986"},  
      {empId: "108", empName:"Nitish", gender:"Male", title:"Software Developer",salary:"80000", department:"1",address:"Pune",dob:"01/01/1986"},  

      {empId: "109", empName:"Ravi", gender:"Male", title:"Software Developer",salary:"90000", department:"1",address:"Pune",dob:"01/01/1986"},  
      {empId: "110", empName:"Teja", gender:"Male", title:"Software Developer",salary:"50000", department:"1",address:"Pune",dob:"01/01/1986"},  


    ]


   }

  ngOnInit(): void {
  }

}
