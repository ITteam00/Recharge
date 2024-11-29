import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  private phoneNumber = new BehaviorSubject<string>('');
  private amount = new BehaviorSubject<number>(0);
  private phoneValid = new BehaviorSubject<boolean>(false);
  private amountValid = new BehaviorSubject<boolean>(false);

  phoneNumber$ = this.phoneNumber.asObservable();
  amount$ = this.amount.asObservable();
  phoneValid$ = this.phoneValid.asObservable();
  amountValid$ = this.amountValid.asObservable();

  setPhoneNumber(phone: string) {
    this.phoneNumber.next(phone);
  }

  setAmount(amount: number) {
    this.amount.next(amount);
  }

  setPhoneValid(isValid: boolean) {
    this.phoneValid.next(isValid);
  }

  setAmountValid(isValid: boolean) {
    this.amountValid.next(isValid);
  }
}
