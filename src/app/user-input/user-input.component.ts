import { Component, EventEmitter, output, Output, signal } from '@angular/core';
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
  expectedReturn = signal('5');
  intialInvestment = signal('10000');
  annualInvestment = signal('0');
  duration = signal('10');

  // @Output() calculate = new EventEmitter<InvestmentInput>();
  calculate = output<InvestmentInput>();

  onSubmit() {
    console.log('submitted');
    this.calculate.emit({
      initialInvestment: +this.intialInvestment(),
      expectedReturn: +this.expectedReturn(),
      annualInvestment: +this.annualInvestment(),
      duration: +this.duration(),
    });
  }
}
