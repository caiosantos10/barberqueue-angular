import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyContainerComponent } from './my-container.component';

describe('MyContainerComponent', () => {
  let component: MyContainerComponent;
  let fixture: ComponentFixture<MyContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
