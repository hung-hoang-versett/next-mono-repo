import queryString from "query-string";
export const typeFormAppClientId: any =
  process.env.NEXT_PUBLIC_TYPE_FORM_CLIENT_ID;
export const typeFormAppRedirectUri: any =
  process.env.NEXT_PUBLIC_TYPE_FORM_REDIRECT_URI;
export const typeFormAppClientSecret: any =
  process.env.NEXT_PUBLIC_TYPE_FORM_CLIENT_SECRET;
export const typeFormAppClientApiUri: any =
  process.env.NEXT_PUBLIC_TYPE_FORM_API_URI;
//https://developer.typeform.com/get-started/scopes/
const scopes = ["accounts:read"];

// Config object to be passed to typeform.com on creation
type Configuration = {
  client_id: string;
  state?: string;
  redirect_uri: string;
  scope?: string;
};
export const typeFormConfig: Configuration = {
  client_id: typeFormAppClientId,
  redirect_uri: typeFormAppRedirectUri,
  scope: scopes.join(""),
};
export const typeFormAuthorizeUri = `${typeFormAppClientApiUri}/oauth/authorize?${queryString.stringify(
  typeFormConfig
)}`;
