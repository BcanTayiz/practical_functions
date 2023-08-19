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


module.exports = {
    customCompress:customCompress,
    customDecompress:customDecompress
}