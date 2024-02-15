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

async function generateCodeChallenge(codeVerifier) {
  const encoder = new TextEncoder();
  const data = encoder.encode(codeVerifier);
  const hashedBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashedCodeVerifier = arrayBufferToBase64Url(hashedBuffer);
  return hashedCodeVerifier;
}

function arrayBufferToBase64Url(buffer) {
  const bytes = new Uint8Array(buffer);
  const binary = String.fromCharCode(...bytes);
  return btoa(binary)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

export async function generateCodeVerifierAndChallenge() {
  const codeVerifier = await generateRandomCodeVerifier();
  const codeChallenge = await generateCodeChallenge(codeVerifier);

  return { codeVerifier, codeChallenge };
}

export function buildFitbitAuthorizationUrl(clientId, codeChallenge, scopes) {
  const authorizationUrl = "https://www.fitbit.com/oauth2/authorize";
  const responseType = "code";
  const codeChallengeMethod = "S256";

  const url = new URL(authorizationUrl);
  url.searchParams.append("client_id", clientId);
  url.searchParams.append("response_type", responseType);
  url.searchParams.append("code_challenge", codeChallenge);
  url.searchParams.append("code_challenge_method", codeChallengeMethod);
  url.searchParams.append("scope", scopes.join(" "));

  return url.toString();
}

export async function exchangeAuthorizationCodeForTokens(
  clientId,
  authorizationCode,
  codeVerifier
) {
  const getTokensUrl = "https://api.fitbit.com/oauth2/token";
  const grantType = "authorization_code";

  console.log(clientId);
  console.log(authorizationCode);
  console.log(codeVerifier);

  const url = new URL(getTokensUrl);
  url.searchParams.append("client_id", clientId);
  url.searchParams.append("code", authorizationCode);
  url.searchParams.append("code_verifier", codeVerifier);
  url.searchParams.append("grant_type", grantType);

  //API Post
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  const data = await res.json();

  // will need to change this to get the refresh token as well
  return data.access_token;
}
