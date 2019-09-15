declare namespace String {
  export function Trim(str: string, pattern: string): string;
  export function ToCamelCase(str: string): string;
  export function ToLowerCamelCase(str: string): string;
  export function ToPrivateCase(str: string): string;
  export function TrimFront(str: string, pattern: string): string;
  export function CheckNumOfCharacterInString(
    str: string,
    char: string
  ): number;
  export function IsEmptyOrWhitespaceOrNil(str: string): boolean;
  export function IsWhitespace(str: string): boolean;
  export function ElipseLimit(str: string, characterLimit: number): string;
  export function AddCommas(number: number): string;
}
