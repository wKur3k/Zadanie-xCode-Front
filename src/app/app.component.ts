import { Component, OnInit } from '@angular/core';
import {AppService} from "./app.service";
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public sortedArray: number[] = []
  constructor(private appService:AppService) {
  }

  ngOnInit(){
    this.appService.arrayChanged.subscribe(
      (array: number[]) => {
        this.sortedArray = array
      }
    )
  }
  onSubmit(f: NgForm){
    this.appService.getArraySorted(f.value["numbers"],f.value["order"]);
  }
}
