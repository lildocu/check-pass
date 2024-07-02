export interface PasswordStrategy {
  checkStrength(password: string): boolean
}