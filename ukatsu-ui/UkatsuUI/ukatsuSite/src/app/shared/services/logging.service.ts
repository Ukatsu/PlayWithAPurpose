import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface IMessage {
  content: string;
  style: string;
}

@Injectable({
  providedIn: 'root'
})

export class LoggingService {

  private _messageSource = new Subject<IMessage>();

  message = this._messageSource.asObservable();

  constructor() { }

  updateMessage(content: string, style: string) {
    const message: IMessage = { content, style };
    this._messageSource.next(message);
  }

  clearMessage() {
    this._messageSource.next(null);
  }

}
