import { PasswordStrategy } from "./interfaces/password-strategy.interface";
  
export  class EasyPasswordStrategy implements PasswordStrategy {
  checkStrength(password: string): boolean {
    const onlyLettersRegex = /^[A-Za-z]*$/;
    const onlyDigitsRegex = /^\d*$/;
    const onlySymbolsRegex = /^[^A-Za-z\d]*$/;

    const isEasy = onlyLettersRegex.test(password) ||
      onlyDigitsRegex.test(password) ||
      onlySymbolsRegex.test(password);

    return isEasy;
  }
}
  
export class MediumPasswordStrategy implements PasswordStrategy {
  checkStrength(password: string): boolean {
    const hasLetter = /[A-Za-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSymbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);

    const isMedium = (hasLetter && hasDigit) ||
      (hasLetter && hasSymbol) ||
      (hasDigit && hasSymbol)

    return isMedium
  }
}
  
export class StrongPasswordStrategy implements PasswordStrategy {
  checkStrength(password: string): boolean {
    const hasLetter = /[A-Za-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSymbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);

    const isStrong = hasLetter && hasDigit && hasSymbol

    return isStrong
  }
}
