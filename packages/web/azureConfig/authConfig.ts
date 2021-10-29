import { Configuration, PopupRequest } from "@azure/msal-browser";
const AzureActiveDirectoryAppClientId: any =
  process.env.NEXT_PUBLIC_AZURE_ACTIVE_DIRECTORY_APP_CLIENT_ID;
const AzureActiveDirectoryAppTenantId: any =
  process.env.NEXT_PUBLIC_AZURE_ACTIVE_DIRECTORY_APP_TENANT_ID;
const AzureActiveDirectoryAppRedirectUri: any =
  process.env.NEXT_PUBLIC_AZURE_ACTIVE_DIRECTORY_APP_REDIRECT_URI;
// Config object to be passed to Msal on creation
export const msalConfig: Configuration = {
  auth: {
    clientId: AzureActiveDirectoryAppClientId,
    // authority: `https://login.microsoftonline.com/common`,
    authority: `https://login.microsoftonline.com/${AzureActiveDirectoryAppTenantId}`,
    redirectUri: AzureActiveDirectoryAppRedirectUri,
    postLogoutRedirectUri: "/",
  },
};

// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const loginRequest: PopupRequest = {
  scopes: ["User.Read"],
};

// Add here the endpoints for MS Graph API services you would like to use.
export const graphConfig = {
  // graphMeEndpoint: "https://graph.microsoft.com",
  graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
};
