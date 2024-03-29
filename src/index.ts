import base16 from "@vandeurenglenn/base16"
import base32 from "@vandeurenglenn/base32"
import base58 from "@vandeurenglenn/base58"
import base64 from "@vandeurenglenn/base64"

// TODO: Bignumber....

/**
 * a hexString contains only [0-9] followed by [0-9] or [ A | B | C | D | E | F]
 */
declare type hexString = string

/**
 * a uint8ArrayString contains only Array(number)
 */
declare type uint8ArrayString = string

declare type FormatInterfaceSupportedInput = Uint8Array | base58String | string | object

/**
 * Returns a hex string as Binary string
 * @param string string to encode to binary
 * @returns binaryString
 */
const hexToBinary = (hex: hexString) => 
  (parseInt(hex, 16).toString(2)).padStart(8, '0')

export const isTypedArrayCompatible = (possibleUint8Array: number[] | string | Uint8Array): boolean => {
  if (typeof possibleUint8Array === 'string') {
    possibleUint8Array = possibleUint8Array.split(',').map(number =>   Number(number))
    for (const number of possibleUint8Array) {
      if (isNaN(number)) return false
    }
  }
  for (const number of possibleUint8Array) {
    if (isNaN(number)) return false
  }
  return true
}

/**
 * Returns a String as Uint8Array
 * @param string string to encode to Uint8Array
 * @returns Uint8Array
 */
export const fromString = (string: string): Uint8Array =>
  new TextEncoder().encode(string)

/**
 * Returns a Uint8Array as String
 * @param uint8Array Uint8Array to encode to String
 * @returns String
 */
export const toString = (uint8Array: Uint8Array): string =>
  new TextDecoder().decode(uint8Array)

/**
 * Returns a String as Uint8Array
 * @param string string to encode to Uint8Array
 * @returns Uint8Array
 */
export const fromUintArrayString = (string: uint8ArrayString): Uint8Array =>
  Uint8Array.from(string.split(',').map(string => Number(string)))

/**
 * Returns a Uint8Array as String
 * @param uint8Array Uint8Array to encode to String
 * @returns String
 */
export const toUintArrayString = (uint8Array: Uint8Array): string =>
  uint8Array.toString()

/**
 * hexString -> uint8Array
 * @param string hex encoded string
 * @returns UintArray
 */
export const fromHex = (string: hexString): Uint8Array =>
  Uint8Array.from(string.match(/.{1,2}/g).map((byte) => parseInt(byte, 16)))

/**
 * uint8Array -> hexString
 * @param bytes number[]
 * @returns hexString
 */
export const toHex = (bytes: Uint8Array): hexString =>
  bytes.reduce((string: string, byte: number) => string + byte.toString(16).padStart(2, '0'), '')

  /**
   * number[] -> Uint8Array
   * @param array number[]
   * @returns Uint8Array
   */
export const fromArrayLike = (array: number[] | []): Uint8Array =>
  Uint8Array.from(array)

/**
 * Uint8Array -> number[]
 * @param uint8Array Uint8Array
 * @returns Uint8Array
 */
export const toArrayLike = (uint8Array: Uint8Array): number[] =>
  [...uint8Array.values()]

/**
* object -> Uint8Array
* @param object any
* @returns Uint8Array
*/
export const fromObject = (object: Object): Uint8Array =>
  new TextEncoder().encode(JSON.stringify(object))

/**
 * Uint8Array -> Object
 * @param uint8Array Uint8Array
 * @returns Object
 */
export const toObject = (uint8Array: Uint8Array): Object =>
  JSON.parse(new TextDecoder().decode(uint8Array))

export const fromBinary = (string: string): Uint8Array => 
  fromHex(parseInt(string, 2).toString(16).toUpperCase())

export const toBinary = (uint8Array: Uint8Array): string =>
  hexToBinary(toHex(uint8Array))

export const toBase64  = (uint8Array: Uint8Array): string => 
  base64.encode(uint8Array)

export const fromBase64 =(string: string): Uint8Array => 
  base64.decode(string)

export const toBase58 = (uint8Array: Uint8Array): base58String =>
  base58.encode(uint8Array)

export const fromBase58 = (string: base58String): Uint8Array => 
  base58.decode(string)

export const toBase32 = (uint8Array: Uint8Array): string =>
  base32.encode(uint8Array)

export const fromBase32 = (string: string): Uint8Array => 
  base32.decode(string) 

export const toBase16 = (uint8Array: Uint8Array): string =>
  base16.encode(uint8Array)

export const fromBase16 = (string: string): Uint8Array => 
  base16.decode(string)

class FormatInterface {
  encoded: Uint8Array
  decoded: string | {} | number | boolean | []

  constructor(input: FormatInterfaceSupportedInput) {
    if (input) {
      if (base16.isBase16(input as string)) this.encoded = this.fromBase16(input as string)      
      else if (base32.isBase32(input as string)) this.encoded = this.fromBase32(input as string)      
      else if (base58.isBase58(input as base58String)) this.encoded = this.fromBase58(input as base58String)
      else if (base64.isBase64(input as string)) this.encoded = this.fromBase64(input as string)
      else if (typeof input === 'string') {
        let isCompatible = isTypedArrayCompatible(input)
        if (isCompatible) this.encoded = fromUintArrayString(input)
        else this.encoded = this.fromString(input) // normal string
      } else if (typeof input === 'object') this.encoded = this.fromObject(input)
      else if (input as Uint8Array instanceof Uint8Array) this.encoded = input
      else if (Array.isArray(input) && isTypedArrayCompatible(input)) this.encoded = this.fromArrayLike(input)
    }
  }

    /**
   * Returns a String as Uint8Array
   * @param string string to encode to Uint8Array
   * @returns Uint8Array
   */
  fromString = (string: string): Uint8Array =>
    this.encoded = fromString(string)

  /**
   * Returns a Uint8Array as String
   * @param uint8Array Uint8Array to encode to String
   * @returns String
   */
  toString = (uint8Array: Uint8Array): string =>
    this.decoded = toString(uint8Array)

  /**
   * Returns a String as Uint8Array
   * @param string string to encode to Uint8Array
   * @returns Uint8Array
   */
  fromUintArrayString = (string: uint8ArrayString): Uint8Array =>
    this.encoded = fromUintArrayString(string)

  /**
   * Returns a Uint8Array as String
   * @param uint8Array Uint8Array to encode to String
   * @returns String
   */
  toUintArrayString = (uint8Array: Uint8Array): string =>
    this.decoded = uint8Array.toString()

  /**
   * hexString -> uint8Array
   * @param string hex encoded string
   * @returns UintArray
   */
  fromHex = (string: hexString): Uint8Array =>
    this.encoded = fromHex(string)

  /**
   * uint8Array -> hexString
   * @param bytes ArrayLike
   * @returns hexString
   */
  toHex = (arrayLike: Uint8Array): hexString =>
    this.decoded = toHex(arrayLike)

    /**
     * number[] -> Uint8Array
     * @param array number[]
     * @returns Uint8Array
     */
  fromArrayLike = (array: number[]): Uint8Array =>
    this.encoded = Uint8Array.from(array)

  /**
   * Uint8Array -> number[]
   * @param uint8Array Uint8Array
   * @returns Uint8Array
   */
  toArrayLike = (uint8Array: number[]): number[] =>
    this.decoded = [...uint8Array.values()]

  fromObject = (object: Object): Uint8Array => 
    this.encoded = fromObject(object)
  
  toBinary = (uint8Array: Uint8Array): string =>
    this.decoded = hexToBinary(toHex(uint8Array))

  fromBinary = (binary: string) =>
    this.encoded = fromBinary(binary)

  toObject = (uint8Array: Uint8Array): Object =>
    this.decoded = toObject(uint8Array)

  toBase64 = (uint8Array: Uint8Array): string =>
    this.decoded = base64.encode(uint8Array)

  fromBase64 = (string: string): Uint8Array =>
    this.encoded = base64.decode(string)

  toBase58 = (uint8Array: Uint8Array): base58String =>
    this.decoded = base58.encode(uint8Array)

  fromBase58 = (string: base58String): Uint8Array =>
    this.encoded = base58.decode(string)
  
  toBase32 = (uint8Array: Uint8Array): string =>
    this.decoded =  base32.encode(uint8Array)

  fromBase32 = (string: string): Uint8Array =>
    this.encoded = base32.decode(string)

  toBase16 = (uint8Array: Uint8Array): string =>
    this.decoded =  base16.encode(uint8Array)

  fromBase16 = (string: string): Uint8Array =>
    this.decoded = base16.decode(string)
  
}

export default {
  fromString,
  toString,
  fromHex,
  toHex,
  fromArrayLike,
  toArrayLike,
  fromUintArrayString,
  toUintArrayString,  
  toObject,
  toBinary,
  fromBinary, 
  toBase64,
  fromBase64,
  toBase58,
  fromBase58,
  toBase32,
  fromBase32,
  toBase16,
  fromBase16,
  FormatInterface
}