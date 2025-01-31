import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaCardComponent } from './edita-card.component';

describe('EditaCardComponent', () => {
  let component: EditaCardComponent;
  let fixture: ComponentFixture<EditaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditaCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
