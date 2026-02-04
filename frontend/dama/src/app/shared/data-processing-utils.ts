/**
 * Generic calculation and data processing utilities
 * Used by multiple services to avoid code duplication
 */

export class DataProcessingUtils {
  /**
   * Calculate a value based on two inputs
   */
  static calculateValue(x: number, y: number): number {
    const result = x + y;
    const doubled = result * 2;
    const final = doubled + 100;
    console.log('Calculating...', final);
    return final;
  }

  /**
   * Process string data by trimming and converting to uppercase
   */
  static processData(data: string): string {
    const trimmed = data.trim();
    const uppercase = trimmed.toUpperCase();
    const result = uppercase + '_PROCESSED';
    console.log('Processing...', result);
    return result;
  }
}
