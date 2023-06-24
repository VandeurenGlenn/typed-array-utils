import base16 from '@vandeurenglenn/base16';
import base32 from '@vandeurenglenn/base32';
import base58 from '@vandeurenglenn/base58';
import base64 from '@vandeurenglenn/base64';

/**
 * Returns a hex string as Binary string
 * @param string string to encode to binary
 * @returns binaryString
 */
const hexToBinary = (hex) => (parseInt(hex, 16).toString(2)).padStart(8, '0');
const isTypedArrayCompatible = (possibleUint8Array) => {
    if (typeof possibleUint8Array === 'string') {
        possibleUint8Array = possibleUint8Array.split(',').map(number => Number(number));
        for (const number of possibleUint8Array) {
            if (isNaN(number))
                return false;
        }
    }
    for (const number of possibleUint8Array) {
        if (isNaN(number))
            return false;
    }
    return true;
};
/**
 * Returns a String as Uint8Array
 * @param string string to encode to Uint8Array
 * @returns Uint8Array
 */
const fromString = (string) => new TextEncoder().encode(string);
/**
 * Returns a Uint8Array as String
 * @param uint8Array Uint8Array to encode to String
 * @returns String
 */
const toString = (uint8Array) => new TextDecoder().decode(uint8Array);
/**
 * Returns a String as Uint8Array
 * @param string string to encode to Uint8Array
 * @returns Uint8Array
 */
const fromUintArrayString = (string) => Uint8Array.from(string.split(',').map(string => Number(string)));
/**
 * Returns a Uint8Array as String
 * @param uint8Array Uint8Array to encode to String
 * @returns String
 */
const toUintArrayString = (uint8Array) => uint8Array.toString();
/**
 * hexString -> uint8Array
 * @param string hex encoded string
 * @returns UintArray
 */
const fromHex = (string) => Uint8Array.from(string.match(/.{1,2}/g).map((byte) => parseInt(byte, 16)));
/**
 * uint8Array -> hexString
 * @param bytes number[]
 * @returns hexString
 */
const toHex = (bytes) => bytes.reduce((string, byte) => string + byte.toString(16).padStart(2, '0'), '');
/**
 * number[] -> Uint8Array
 * @param array number[]
 * @returns Uint8Array
 */
const fromArrayLike = (array) => Uint8Array.from(array);
/**
 * Uint8Array -> number[]
 * @param uint8Array Uint8Array
 * @returns Uint8Array
 */
const toArrayLike = (uint8Array) => [...uint8Array.values()];
/**
* object -> Uint8Array
* @param object any
* @returns Uint8Array
*/
const fromObject = (object) => new TextEncoder().encode(JSON.stringify(object));
/**
 * Uint8Array -> Object
 * @param uint8Array Uint8Array
 * @returns Object
 */
const toObject = (uint8Array) => JSON.parse(new TextDecoder().decode(uint8Array));
const fromBinary = (string) => fromHex(parseInt(string, 2).toString(16).toUpperCase());
const toBinary = (uint8Array) => hexToBinary(toHex(uint8Array));
const toBase64 = (uint8Array) => base64.encode(uint8Array);
const fromBase64 = (string) => base64.decode(string);
const toBase58 = (uint8Array) => base58.encode(uint8Array);
const fromBase58 = (string) => base58.decode(string);
const toBase32 = (uint8Array) => base32.encode(uint8Array);
const fromBase32 = (string) => base32.decode(string);
const toBase16 = (uint8Array) => base16.encode(uint8Array);
const fromBase16 = (string) => base16.decode(string);
class FormatInterface {
    encoded;
    decoded;
    constructor(input) {
        if (input) {
            if (base16.isBase16(input))
                this.encoded = this.fromBase16(input);
            else if (base32.isBase32(input))
                this.encoded = this.fromBase32(input);
            else if (base58.isBase58(input))
                this.encoded = this.fromBase58(input);
            else if (base64.isBase64(input))
                this.encoded = this.fromBase64(input);
            else if (typeof input === 'string') {
                let isCompatible = isTypedArrayCompatible(input);
                if (isCompatible)
                    this.encoded = fromUintArrayString(input);
                else
                    this.encoded = this.fromString(input); // normal string
            }
            else if (typeof input === 'object')
                this.encoded = this.fromObject(input);
            else if (input instanceof Uint8Array)
                this.encoded = input;
            else if (Array.isArray(input) && isTypedArrayCompatible(input))
                this.encoded = this.fromArrayLike(input);
        }
    }
    /**
   * Returns a String as Uint8Array
   * @param string string to encode to Uint8Array
   * @returns Uint8Array
   */
    fromString = (string) => this.encoded = fromString(string);
    /**
     * Returns a Uint8Array as String
     * @param uint8Array Uint8Array to encode to String
     * @returns String
     */
    toString = (uint8Array) => this.decoded = toString(uint8Array);
    /**
     * Returns a String as Uint8Array
     * @param string string to encode to Uint8Array
     * @returns Uint8Array
     */
    fromUintArrayString = (string) => this.encoded = fromUintArrayString(string);
    /**
     * Returns a Uint8Array as String
     * @param uint8Array Uint8Array to encode to String
     * @returns String
     */
    toUintArrayString = (uint8Array) => this.decoded = uint8Array.toString();
    /**
     * hexString -> uint8Array
     * @param string hex encoded string
     * @returns UintArray
     */
    fromHex = (string) => this.encoded = fromHex(string);
    /**
     * uint8Array -> hexString
     * @param bytes ArrayLike
     * @returns hexString
     */
    toHex = (arrayLike) => this.decoded = toHex(arrayLike);
    /**
     * number[] -> Uint8Array
     * @param array number[]
     * @returns Uint8Array
     */
    fromArrayLike = (array) => this.encoded = Uint8Array.from(array);
    /**
     * Uint8Array -> number[]
     * @param uint8Array Uint8Array
     * @returns Uint8Array
     */
    toArrayLike = (uint8Array) => this.decoded = [...uint8Array.values()];
    fromObject = (object) => this.encoded = fromObject(object);
    toBinary = (uint8Array) => this.decoded = hexToBinary(toHex(uint8Array));
    fromBinary = (binary) => this.encoded = fromBinary(binary);
    toObject = (uint8Array) => this.decoded = toObject(uint8Array);
    toBase64 = (uint8Array) => this.decoded = base64.encode(uint8Array);
    fromBase64 = (string) => this.encoded = base64.decode(string);
    toBase58 = (uint8Array) => this.decoded = base58.encode(uint8Array);
    fromBase58 = (string) => this.encoded = base58.decode(string);
    toBase32 = (uint8Array) => this.decoded = base32.encode(uint8Array);
    fromBase32 = (string) => this.encoded = base32.decode(string);
    toBase16 = (uint8Array) => this.decoded = base16.encode(uint8Array);
    fromBase16 = (string) => this.decoded = base16.decode(string);
}
var index = {
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
};

export { index as default, fromArrayLike, fromBase16, fromBase32, fromBase58, fromBase64, fromBinary, fromHex, fromObject, fromString, fromUintArrayString, isTypedArrayCompatible, toArrayLike, toBase16, toBase32, toBase58, toBase64, toBinary, toHex, toObject, toString, toUintArrayString };
