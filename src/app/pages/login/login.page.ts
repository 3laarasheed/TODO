import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form: FormGroup;
  // validation using reactiveForms see it in login-routing-module
  constructor(private fb: FormBuilder, private navCtrl: NavController) {
    this.creatForm();
  }

  ngOnInit() {
  }
  creatForm() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  onSubmit() {
    console.log(this.form.value); // command which contain form data gone to sever
    this.navCtrl.navigateForward('/home');

  }
}
