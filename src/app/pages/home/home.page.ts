import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { DataService } from '../../services/data/data.service';
import { Todo } from '../../shared/todo';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  todos: Todo[];
  loading: boolean;
  constructor(private navCtrl: NavController, private alertCtrl: AlertController, private dataService: DataService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false ; // this means load page and its data in 1.5s when data is ready and before show
      this.todos = this.dataService.getData();
    }, 2000);
  }

  createTodo() {
    this.navCtrl.navigateForward('/order-config');
  }


  detail(todo: Todo) {
    this.dataService.setParams({
      todo
    });
    this.navCtrl.navigateForward('/order-detail');
  }


  async delete(index: number) {
    const alert = await this.alertCtrl.create({
      // put alert components
      header: 'Confirm Deleting',
      message: 'Are you sure about deleting ?',
      mode: 'ios',
      buttons: [
        {
          text: 'No',
          role: 'cancel'
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('delete todo');
            this.todos.splice(index, 1);
          }
        }
      ]
    });
    await alert.present();
  }


  edit(todo: Todo) {
    this.dataService.setParams({
      todo
    });
    this.navCtrl.navigateForward('/order-config');
  }
  refreshPage(ev) {
    setTimeout(() => {
      this.todos = this.dataService.getData();
      // after the is here after 2 seconds do dismiss
      ev.target.complete();
      console.log(ev); // to check the value
    }, 1500);
  }
  loadData(ev) {
    setTimeout(() => {
      this.todos = this.todos.concat(this.dataService.getData());
      ev.target.complete();
      console.log(ev);
    }, 1000);
  }
}
