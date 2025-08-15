import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
constructor(private http:HttpClient)
{}
result:any;

add()
{
  let s="http://localhost:8080/add5and6";

  this.http.get(s).subscribe((num)=>{
    this.result=num;
  });
}

sub()
{
  let s="http://localhost:8080/sub5and6";

  this.http.get(s).subscribe((num)=>{
    this.result=num;
  });
}
mult()
{
  let s="http://localhost:8080/mult5and6";

  this.http.get(s).subscribe((num)=>{
    this.result=num;
  });
}


div()
{
  let s="http://localhost:8080/div5and6";

  this.http.get(s).subscribe((num)=>{
    this.result=num;
  });
}
  
}



