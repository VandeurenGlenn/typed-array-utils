/**
 * a hexString contains only [0-9] followed by [0-9] or [ A | B | C | D | E | F]
 */
declare type hexString = string;
/**
 * a uint8ArrayString contains only Array(number)
 */
declare type uint8ArrayString = string;
declare type FormatInterfaceSupportedInput = Uint8Array | base58String | string | object;
export declare const isTypedArrayCompatible: (possibleUint8Array: number[] | string) => boolean;
/**
 * Returns a String as Uint8Array
 * @param string string to encode to Uint8Array
 * @returns Uint8Array
 */
export declare const fromString: (string: string) => Uint8Array;
/**
 * Returns a Uint8Array as String
 * @param uint8Array Uint8Array to encode to String
 * @returns String
 */
export declare const toString: (uint8Array: Uint8Array) => string;
/**
 * Returns a String as Uint8Array
 * @param string string to encode to Uint8Array
 * @returns Uint8Array
 */
export declare const fromUintArrayString: (string: uint8ArrayString) => Uint8Array;
/**
 * Returns a Uint8Array as String
 * @param uint8Array Uint8Array to encode to String
 * @returns String
 */
export declare const toUintArrayString: (uint8Array: Uint8Array) => string;
/**
 * hexString -> uint8Array
 * @param string hex encoded string
 * @returns UintArray
 */
export declare const fromHex: (string: hexString) => Uint8Array;
/**
 * uint8Array -> hexString
 * @param bytes number[]
 * @returns hexString
 */
export declare const toHex: (bytes: number[]) => hexString;
/**
 * number[] -> Uint8Array
 * @param array number[]
 * @returns Uint8Array
 */
export declare const fromArrayLike: (array: number[]) => Uint8Array;
/**
 * Uint8Array -> number[]
 * @param uint8Array Uint8Array
 * @returns Uint8Array
 */
export declare const toArrayLike: (uint8Array: number[]) => number[];
export declare const fromObject: (object: Object) => Uint8Array;
export declare const toObject: (uint8Array: Uint8Array) => Object;
export declare const toBase64: (uint8Array: Uint8Array) => string;
export declare const fromBase64: (string: string) => Uint8Array;
export declare const toBase58: (uint8Array: Uint8Array) => base58String;
export declare const fromBase58: (string: base58String) => Uint8Array;
export declare const toBase32: (uint8Array: Uint8Array) => string;
export declare const fromBase32: (string: string) => Uint8Array;
export declare const toBase16: (uint8Array: Uint8Array) => string;
export declare const fromBase16: (string: string) => Uint8Array;
declare class FormatInterface {
    encoded: Uint8Array;
    constructor(input: FormatInterfaceSupportedInput);
    /**
   * Returns a String as Uint8Array
   * @param string string to encode to Uint8Array
   * @returns Uint8Array
   */
    fromString(string: string): Uint8Array;
    /**
     * Returns a Uint8Array as String
     * @param uint8Array Uint8Array to encode to String
     * @returns String
     */
    toString(uint8Array: Uint8Array): string;
    /**
     * Returns a String as Uint8Array
     * @param string string to encode to Uint8Array
     * @returns Uint8Array
     */
    fromUintArrayString(string: uint8ArrayString): Uint8Array;
    /**
     * Returns a Uint8Array as String
     * @param uint8Array Uint8Array to encode to String
     * @returns String
     */
    toUintArrayString(uint8Array: Uint8Array): string;
    /**
     * hexString -> uint8Array
     * @param string hex encoded string
     * @returns UintArray
     */
    fromHex(string: hexString): Uint8Array;
    /**
     * uint8Array -> hexString
     * @param bytes number[]
     * @returns hexString
     */
    toHex(bytes: number[]): hexString;
    /**
     * number[] -> Uint8Array
     * @param array number[]
     * @returns Uint8Array
     */
    fromArrayLike(array: number[]): Uint8Array;
    /**
     * Uint8Array -> number[]
     * @param uint8Array Uint8Array
     * @returns Uint8Array
     */
    toArrayLike(uint8Array: number[]): number[];
    fromObject(object: Object): Uint8Array;
    toObject(uint8Array: Uint8Array): Object;
    toBase64(uint8Array: Uint8Array): string;
    fromBase64(string: string): Uint8Array;
    toBase58(uint8Array: Uint8Array): base58String;
    fromBase58(string: base58String): Uint8Array;
    toBase32(uint8Array: Uint8Array): string;
    fromBase32(string: string): Uint8Array;
    toBase16(uint8Array: Uint8Array): string;
    fromBase16(string: string): Uint8Array;
}
declare const _default: {
    fromString: (string: string) => Uint8Array;
    toString: (uint8Array: Uint8Array) => string;
    fromHex: (string: string) => Uint8Array;
    toHex: (bytes: number[]) => string;
    fromArrayLike: (array: number[]) => Uint8Array;
    toArrayLike: (uint8Array: number[]) => number[];
    fromUintArrayString: (string: string) => Uint8Array;
    toUintArrayString: (uint8Array: Uint8Array) => string;
    toBase64: (uint8Array: Uint8Array) => string;
    fromBase64: (string: string) => Uint8Array;
    toBase58: (uint8Array: Uint8Array) => string;
    fromBase58: (string: string) => Uint8Array;
    toBase32: (uint8Array: Uint8Array) => string;
    fromBase32: (string: string) => Uint8Array;
    toBase16: (uint8Array: Uint8Array) => string;
    fromBase16: (string: string) => Uint8Array;
    FormatInterface: typeof FormatInterface;
};
export default _default;
