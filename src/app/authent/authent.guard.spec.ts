import { TestBed } from '@angular/core/testing';

import { AuthentGuard } from './authent.guard';

describe('AuthentGuard', () => {
  let guard: AuthentGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthentGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
