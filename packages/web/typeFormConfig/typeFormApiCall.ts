import queryString from "query-string";
import {
  typeFormAppClientApiUri,
  typeFormAppClientId,
  typeFormAppClientSecret,
  typeFormAppRedirectUri,
} from "./authConfig";

export async function getAccessToken(code: string) {
  const params = {
    grant_type: "authorization_code",
    client_id: typeFormAppClientId,
    client_secret: typeFormAppClientSecret,
    redirect_uri: typeFormAppRedirectUri,
    code,
  };
  return fetch(`${typeFormAppClientApiUri}/oauth/token`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: queryString.stringify(params),
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
}
