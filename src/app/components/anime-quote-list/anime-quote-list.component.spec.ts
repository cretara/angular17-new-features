import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeQuoteListComponent } from './anime-quote-list.component';

describe('AnimeQuoteListComponent', () => {
  let component: AnimeQuoteListComponent;
  let fixture: ComponentFixture<AnimeQuoteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimeQuoteListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnimeQuoteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
