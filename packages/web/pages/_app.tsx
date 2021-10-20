import type { AppProps } from "next/app";
import { MsalProvider } from "@azure/msal-react";
import { useRouter } from "next/router";
import { CustomNavigationClient } from "azureConfig/NavigationClient";
import { getAccessToken as getAccessTokenTypeForm } from "typeFormConfig/typeFormApiCall";
import {
  PublicClientApplication,
  EventType,
  EventMessage,
  AuthenticationResult,
} from "@azure/msal-browser";
import { msalConfig } from "azureConfig/authConfig";
import { useEffect } from "react";
export const msalInstance = new PublicClientApplication(msalConfig);

// Account selection logic is app dependent. Adjust as needed for different use cases.
const accounts = msalInstance.getAllAccounts();
if (accounts.length > 0) {
  msalInstance.setActiveAccount(accounts[0]);
}

msalInstance.addEventCallback((event: EventMessage) => {
  if (event.eventType === EventType.LOGIN_SUCCESS && event.payload) {
    const payload = event.payload as AuthenticationResult;
    const account = payload.account;
    msalInstance.setActiveAccount(account);
  }
});
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const navigationClient = new CustomNavigationClient(router);
  msalInstance.setNavigationClient(navigationClient);
  useEffect(() => {
    const code = router.query.code;
    if (typeof code === "string" && code) {
      getAccessTokenTypeForm(code);
    }
  }, [router]);
  return (
    <MsalProvider instance={msalInstance}>
      <Component {...pageProps} />
    </MsalProvider>
  );
}
export default MyApp;
