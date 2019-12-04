import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
 
  @Input() parentData: any={};
  @Output() dataEmitter = new EventEmitter();
  childData: any= {};
  name: string;
  age: number;

  constructor() {
    console.log("Parent Data : ",JSON.stringify(this.parentData));
   }

  submitForm(){
    this.childData.name = this.name;
    this.childData.age = this.age;
    this.dataEmitter.emit(this.childData);
  }
  ngOnInit() {
  }

}
