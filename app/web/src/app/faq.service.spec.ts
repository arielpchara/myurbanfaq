import { TestBed, inject } from '@angular/core/testing';
import { FaqService } from './faq.service';

describe('FaqService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FaqService]
    });
  });

  it('should ...', inject([FaqService], (service: FaqService) => {
    expect(service).toBeTruthy();
  }));
});
