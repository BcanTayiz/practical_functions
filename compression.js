const pako = require('pako');
const { TextEncoder, TextDecoder } = require('text-encoding');

// Function to compress a string using zlib
function customCompress(inputString) {
  const encoder = new TextEncoder();
  const data = encoder.encode(inputString);
  const compressedData = pako.deflate(data);
  return btoa(String.fromCharCode(...new Uint8Array(compressedData)));
}

// Function to decompress a string compressed with customCompress
function customDecompress(compressedString) {
  const compressedData = new Uint8Array(atob(compressedString).split('').map(char => char.charCodeAt(0)));
  const decompressedData = pako.inflate(compressedData);
  const decoder = new TextDecoder();
  return decoder.decode(decompressedData);
}

function compressJSON(jsonObject) {
  const jsonString = JSON.stringify(jsonObject);
  return customCompress(jsonString);
}

function decompressJSON(compressedString) {
  const decompressedString = customDecompress(compressedString);
  return JSON.parse(decompressedString);
}

function encodeBase64(data) {
  return btoa(data);
}

function decodeBase64(encodedData) {
  return atob(encodedData);
}

function encodeURLSafeBase64(data) {
  const base64 = encodeBase64(data);
  return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function decodeURLSafeBase64(encodedData) {
  let base64 = encodedData.replace(/-/g, '+').replace(/_/g, '/');
  while (base64.length % 4) {
      base64 += '=';
  }
  return decodeBase64(base64);
}



module.exports = {
    customCompress:customCompress,
    customDecompress:customDecompress,
    compressJSON:compressJSON,
    decompressJSON:decompressJSON,
    encodeBase64:encodeBase64,
    decodeBase64:decodeBase64,
    encodeURLSafeBase64:encodeURLSafeBase64,
    decodeURLSafeBase64:decodeURLSafeBase64,
}