import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StepService {
  private currentStep = new BehaviorSubject<number>(1);
  currentStep$ = this.currentStep.asObservable();

  setStep(step: number) {
    this.currentStep.next(step);
  }
}
