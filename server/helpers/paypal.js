const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "Aa8SyfbG21Ni2Ex_pzsSMCpMycbobHqzgbEvgPEqfTrqmHJSM07wOQktrq0s39pwMuEbpas7s2HJTOPk",
  client_secret: "ECSViW2u0WHf4f52dSbMKLPCK8VOGIzEoApUvMEkAhrEU_JCETToG_ZfYdHMLwiH3rR853OfyjsUmFQr",
});

module.exports = paypal;
