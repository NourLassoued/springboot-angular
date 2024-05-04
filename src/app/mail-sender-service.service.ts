import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MailStructure } from './models/mailStructure.model';
import { Observable, catchError, from, switchMap, throwError } from 'rxjs';
import QRCode from 'qrcode';
import { QRCodeService } from './qrcode.service';


@Injectable({
  providedIn: 'root'
})
export class MailSenderServiceService {
  private apiUrl = 'http://localhost:8082';
  private qrCodeImageUrl: string = "assets/qr-code.png";

  /*
  sendMail(email: string, mailStructure: MailStructure): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/mail/send/${email}`, mailStructure);
  }*/constructor(private http: HttpClient, private qrCodeService: QRCodeService) { } // Injectez le service QRCodeService

 sendMail(email: string, mailStructure: MailStructure): Observable<any> {
    if (!mailStructure.qrCodeData) {
      return throwError('QR code data is undefined');
    }

    // Utilisez l'URL de l'image du code QR dans le message de l'e-mail
    const messageWithQR = `${mailStructure.message} <img src="${this.qrCodeImageUrl}" alt="QR Code">`;

    // Envoyez l'e-mail avec le message construit
    return this.http.post<any>(`${this.apiUrl}/mail/send/${email}`, {
      subject: mailStructure.subject,
      message: messageWithQR
    });
  }
}