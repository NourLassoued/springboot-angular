
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import QRCode from 'qrcode-generator';
import * as qrcode from 'qrcode';

@Injectable({
  providedIn: 'root'
})
export class QRCodeService {

  constructor() { }

  generateQRCode(qrCodeData: string): Observable<string> {
    return new Observable(observer => {
      qrcode.toDataURL(qrCodeData, (err, qrCodeUrl) => {
        if (err) {
          observer.error(`Erreur lors de la génération du code QR : ${err}`);
        } else {
          observer.next(qrCodeUrl);
          observer.complete();
        }
      });
    });
  }
}


