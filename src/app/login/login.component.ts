import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import "rxjs/Rx";

interface DataResponse{
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    id: number;
}
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
    public input: any;
    constructor(private http: HttpClient) {
        this.input = {
            "email": "",
            "password": ""
        };
    }

    
 public verification(){
     var tempArray:DataResponse[]=[];
     this.http.get('http://localhost:3000/account').subscribe((data:DataResponse[])=>{
         tempArray=data
        }); 
   var j;
   j=0;
       for(var i=0;i<tempArray.length;i++){
       if(this.input.email===tempArray[i].email && this.input.password===tempArray[i].password){
       alert("successfully loggedIn");
      break;
       }
       j++;
    }
         if(j==i)
         alert("Invalid data");
         
     }
 
   
    }
 

