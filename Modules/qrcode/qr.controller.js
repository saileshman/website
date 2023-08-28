const qrCode = require("qrcode");

const createQr = async (url) => {
  const qrData = qrCode.toDataURL(url);
  return qrData;
};

module.exports = qrCode;
