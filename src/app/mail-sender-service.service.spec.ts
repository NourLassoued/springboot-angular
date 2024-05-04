import { TestBed } from '@angular/core/testing';

import { MailSenderServiceService } from './mail-sender-service.service';

describe('MailSenderServiceService', () => {
  let service: MailSenderServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MailSenderServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
