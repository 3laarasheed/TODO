import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { DataService } from '../../services/data/data.service';
import { Todo } from '../../shared/todo';

@Component({
  selector: 'app-order-config',
  templateUrl: './order-config.page.html',
  styleUrls: ['./order-config.page.scss'],
})
export class OrderConfigPage implements OnInit {
  form: FormGroup;
  todo: Todo;
  constructor(private navCtrl: NavController, private fb: FormBuilder, private dataService: DataService) {
    this.creatForm();
  }

  ngOnInit() {
    // what is its importance => اختصار في الكتابة علشان يكون جوا obj المبعوت
    this.todo = this.dataService.getParams().todo;
    this.patchForm();
  }

  // this method check if i have a form in my todo then it maps each value in right place
patchForm(){
  if (this.todo){
    this.form.patchValue({
      title : this.todo.title,
      desc : this.todo.desc
    });
  }
}

  creatForm() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      desc: ['', Validators.required]
    });
    this.dataService.postData(this.todo);
  }
  onSubmit() {
    console.log(this.form.value);
    // if i edit or not i need to save last values in my reference value
    const form = this.form.value;
    if (this.todo){
      this.todo.title = form.title;
      this.todo.desc = form.desc;
      this.todo.date = new Date();
    }
    this.navCtrl.pop();
  }
}
// this page is for add and edit
