async function generateRandomCodeVerifier() {
  const codeVerifierLength = 128;
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~";
  let codeVerifier = "";

  for (let i = 0; i < codeVerifierLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    codeVerifier += characters.charAt(randomIndex);
  }

  return codeVerifier;
}

module.exports = generateRandomCodeVerifier;
