import { Component, OnInit, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';
import { FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeData: any;
  homeForm;
  yourName:string = 'Harman';
  name: string;
  password: string;
  age: number;
  constructor(private formBuilder: FormBuilder) {
    this.homeForm = this.formBuilder.group({
      name:'',
      password:''
    });
   }

   onSubmit(formData){
    console.log('Form Data : ', formData);
    this.homeData = this.homeForm;
    this.homeForm.reset();
   }

   updateData($event){
    this.name = $event.name;
    this.age = $event.age;
   }
   
  ngOnInit() {
  }

}
