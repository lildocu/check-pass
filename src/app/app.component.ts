import { Component } from "@angular/core";
import { Strength } from "./interfaces/strength.interface";
import { PasswordStrategy } from "./interfaces/password-strategy.interface";
import { EasyPasswordStrategy, MediumPasswordStrategy, StrongPasswordStrategy } from "./check-pass.strategy";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Password Checking'
  password = ''
  strength: Strength = { lessThenEight: false, easy: false, medium: false, strong: false }

  strategies: PasswordStrategy[] = [
    new EasyPasswordStrategy(),
    new MediumPasswordStrategy(),
    new StrongPasswordStrategy()
  ];

  constructor () {}

  onInputChange() {

    if (this.password.length === 0) {
      this.strength = { lessThenEight: false, easy: false, medium: false, strong: false };
      
      return;
    } else if (this.password.length < 8) {
      this.strength.lessThenEight = true
      
      return;
    } else {
      this.strength = {
        lessThenEight: false,
        easy: this.strategies[0].checkStrength(this.password),
        medium: this.strategies[1].checkStrength(this.password),
        strong: this.strategies[2].checkStrength(this.password),
      }
    }
  }
}
