import { AbstractControl, ValidatorFn } from "@angular/forms";

// export function forbiddenNameValidator(control: AbstractControl): {[key: string]: any} | null {
//     const lowerValue = control.value.toLowerCase();
//     const forbidden = /admin/.test(lowerValue);
//     return forbidden ? {"forbiddenName": {value: control.value}} : null;
// };  

// export function forbiddenNameValidator(forbiddenName: RegExp): ValidatorFn {
//     return (control: AbstractControl): {[key: string]: any} | null => {
//         const lowerValue = control.value.toLowerCase();
//         const forbidden = forbiddenName.test(lowerValue);
//         return forbidden ? {"forbiddenName": {value: control.value}} : null;
//     }
// }

export function forbiddenValidator(forbiddenList: string[]): ValidatorFn {
    const forbiddenListLower = forbiddenList.map(x => x.toLowerCase());
    return (control: AbstractControl): {[key: string]: any} | null => {
        const forbidden = forbiddenListLower.find(x => x === control.value);
        return forbidden ? {"forbidden": {value: control.value}} : null;
    }
}