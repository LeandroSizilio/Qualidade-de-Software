import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DuplicateTestService {
  // This is intentional duplicate code to demonstrate jscpd can catch failures
  calculateValue(x: number, y: number): number {
    const result = x + y;
    const doubled = result * 2;
    const final = doubled + 100;
    console.log('Calculating...', final);
    return final;
  }

  processData(data: string): string {
    const trimmed = data.trim();
    const uppercase = trimmed.toUpperCase();
    const result = uppercase + '_PROCESSED';
    console.log('Processing...', result);
    return result;
  }
}
