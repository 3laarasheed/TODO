import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrderConfigPage } from './order-config.page';

describe('OrderConfigPage', () => {
  let component: OrderConfigPage;
  let fixture: ComponentFixture<OrderConfigPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderConfigPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderConfigPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
