import {Html5Qrcode} from 'html5-qrcode'

const html5QrCode = new Html5Qrcode("reader");

  function startScanner() {
    const qrCodeSuccessCallback = (decodedText, decodedResult) => {
      document.getElementById("result").innerText = `Scanned: ${decodedText}`;
    };
    html5QrCode.start(
      { facingMode: "environment" },
      { fps: 10, qrbox: { width: 250, height: 250 } },
      qrCodeSuccessCallback
    ).catch((err) => {
      console.error("Error starting the scanner:", err);
    });
  }

  // Start the scanner when the page loads
  startScanner();