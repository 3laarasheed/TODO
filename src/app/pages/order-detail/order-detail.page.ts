import { Component, OnDestroy, OnInit } from '@angular/core';
import { Todo } from '../../shared/todo';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.page.html',
  styleUrls: ['./order-detail.page.scss'],
})
export class OrderDetailPage implements OnInit, OnDestroy {
  todo: Todo;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.todo = this.dataService.getParams().todo;
  }
  // عود نفسك وانت بتستخدم navParams
  // في ارسال الداتا او اوبجيكت يكون فيها حاجه واحده وطالما رايح ل صفحه مفيش اعتماديه فيها
  // يبقي بعد م تخلص وانت بترجع تعمل حذف للداتا علشان لو حاجه تانيه هتستخدم نفس الاسم
  // الدقيقة 7 الجزأ 2
  ngOnDestroy(){
    this.dataService.setParams({}); // just make it empty as i have just on todo
  }

}
