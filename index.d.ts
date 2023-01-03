/**
 * a hexString contains only [0-9] followed by [0-9] or [ A | B | C | D | E | F]
 */
type hexString = string;
/**
 * a uint8ArrayString contains only Array(number)
 */
type uint8ArrayString = string;
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
export declare const fromHexString: (string: hexString) => Uint8Array;
/**
 * uint8Array -> hexString
 * @param bytes number[]
 * @returns hexString
 */
export declare const toHexString: (bytes: number[]) => hexString;
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
export declare const toBase58check: (uint8Array: Uint8Array) => Promise<base58String>;
export declare const fromBase58check: (string: base58String) => Promise<Uint8Array>;
export declare const toBase58: (uint8Array: Uint8Array) => base58String;
export declare const fromBase58: (string: base58String) => Uint8Array;
export declare const toBase32: (uint8Array: Uint8Array) => base32String;
export declare const fromBase32: (string: base32String) => Uint8Array;
declare const _default: {
    fromString: (string: string) => Uint8Array;
    toString: (uint8Array: Uint8Array) => string;
    fromHexString: (string: string) => Uint8Array;
    toHexString: (bytes: number[]) => string;
    fromArrayLike: (array: number[]) => Uint8Array;
    toArrayLike: (uint8Array: number[]) => number[];
    fromUintArrayString: (string: string) => Uint8Array;
    toUintArrayString: (uint8Array: Uint8Array) => string;
    toBase58check: (uint8Array: Uint8Array) => Promise<string>;
    fromBase58check: (string: string) => Promise<Uint8Array>;
    toBase58: (uint8Array: Uint8Array) => string;
    fromBase58: (string: string) => Uint8Array;
    toBase32: (uint8Array: Uint8Array) => string;
    fromBase32: (string: string) => Uint8Array;
};
export default _default;
