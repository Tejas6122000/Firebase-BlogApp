import { TestBed } from '@angular/core/testing';

import { BlogFunctionsService } from './blog-functions.service';

describe('BlogFunctionsService', () => {
  let service: BlogFunctionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogFunctionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
