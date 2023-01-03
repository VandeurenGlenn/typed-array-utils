import utils from './index.js'

const uint8Array = utils.fromString('hello')
const helloString = utils.toString(uint8Array)

console.log(utils.fromHex(utils.toHex(uint8Array))[0] === uint8Array[0]);
console.log(utils.fromArrayLike(utils.toArrayLike(uint8Array))[0] === uint8Array[0]);
console.log(utils.fromUintArrayString(utils.toUintArrayString(uint8Array))[0] === uint8Array[0]);
console.log(helloString === 'hello');
console.log(utils.toBase64(uint8Array));
console.log(utils.toBase58(uint8Array));
console.log(utils.toBase32(uint8Array));
console.log(utils.toBase16(uint8Array));

console.log(utils.fromString(utils.toHex(uint8Array)));

const face = await new utils.FormatInterface(utils.toBase58(uint8Array))
console.log(face.toString(face.encoded));
await face.init(utils.toBase32(uint8Array))
console.log(face.toString(face.encoded));
await face.init(utils.toBase64(uint8Array))
console.log(face.toString(face.encoded));
await face.init(utils.toBase16(uint8Array))
console.log(face.toString(face.encoded));