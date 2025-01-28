import QrScanner from 'qr-scanner';
/**
 * 
 * @param {string} decodedText 
 * @param {*} _decodedResult 
 */
async function onScanSuccess(decodedText) {
   const code = decodedText.split(' ')[0].trim()
   console.log(code)
   document.getElementById("qr-text").innerText = decodedText
}
const qrScanner = new QrScanner(
    document.querySelector('video'),
    onScanSuccess,
    { },
);

document.getElementById('start').addEventListener('click', ()=>{
    qrScanner.start()
})