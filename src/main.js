import { Html5QrcodeScanner } from "html5-qrcode";

/**
 * 
 * @param {string} decodedText 
 * @param {*} _decodedResult 
 */
async function onScanSuccess(decodedText, _decodedResult) {
   const code = decodedText.split(' ')[0].trim()
   console.log(code)
   document.getElementById("qr-text").innerText = decodedText
}

function onError(errorMessage) {
  //console.error(`Error scanning QR code: ${errorMessage}`);
}

var html5QrcodeScanner = new Html5QrcodeScanner("qr-reader", { fps: 10, qrbox: 250, rememberLastUsedCamera: true, supportedScanTypes: [0] }, false);
html5QrcodeScanner.render(onScanSuccess, onError);