export class Validator {
    public onlyNumbers(value: string): boolean {
        const regexOnlyNumbers = /^\d+$/;
        return regexOnlyNumbers.test(value);
    }
}