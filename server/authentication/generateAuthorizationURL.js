// builds the initial url that use in the AuthorizeUser.jsx file that redirects the user to Fitbit auth page
function buildFitbitAuthorizationUrl(clientId, codeChallenge, scopes) {
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

module.exports = buildFitbitAuthorizationUrl;
