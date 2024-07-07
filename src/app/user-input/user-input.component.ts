import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  expectedReturn = '5';
  intialInvestment = '10000';
  annualInvestment = '0';
  duration = '10';

  @Output() calculate = new EventEmitter<InvestmentInput>();

  onSubmit() {
    console.log('submitted');
    this.calculate.emit({
      initialInvestment: +this.intialInvestment,
      expectedReturn: +this.expectedReturn,
      annualInvestment: +this.annualInvestment,
      duration: +this.duration,
    });
  }
}
