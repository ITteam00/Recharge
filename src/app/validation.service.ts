import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  private phoneValid = new BehaviorSubject<boolean>(true);
  private amountValid = new BehaviorSubject<boolean>(true);

  phoneValid$ = this.phoneValid.asObservable();
  amountValid$ = this.amountValid.asObservable();

  setPhoneValid(isValid: boolean) {
    this.phoneValid.next(isValid);
  }

  setAmountValid(isValid: boolean) {
    this.amountValid.next(isValid);
  }
}
