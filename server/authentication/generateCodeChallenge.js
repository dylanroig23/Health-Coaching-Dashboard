async function generateCodeChallenge(codeVerifier) {
  const encoder = new TextEncoder();
  const data = encoder.encode(codeVerifier);
  const hashedBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashedCodeVerifier = arrayBufferToBase64Url(hashedBuffer);
  return hashedCodeVerifier;
}

// encrypts the CodeChallenge to the Base64
function arrayBufferToBase64Url(buffer) {
  const bytes = new Uint8Array(buffer);
  const binary = String.fromCharCode(...bytes);
  return btoa(binary)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

module.exports = generateCodeChallenge;
