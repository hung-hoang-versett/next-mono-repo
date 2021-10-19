import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Link from "next/link";
import styles from "styles/Home.module.css";
import { Button } from "shared";
import { loginRequest } from "azureConfig/authConfig";
import { request, gql } from "graphql-request";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { InteractionStatus } from "@azure/msal-browser";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";

const SignInButton = () => {
  const { instance } = useMsal();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleLogin = (loginType: string) => {
    setAnchorEl(null);

    if (loginType === "popup") {
      instance.loginPopup(loginRequest);
    } else if (loginType === "redirect") {
      instance.loginRedirect(loginRequest);
    }
  };

  return (
    <div>
      <Button onClick={() => handleLogin("popup")} key="loginPopup">
        Sign in using Popup
      </Button>
      <Button onClick={() => handleLogin("redirect")} key="loginRedirect">
        Sign in using Redirect
      </Button>
    </div>
  );
};

const SignOutButton = () => {
  const { instance } = useMsal();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleLogout = (logoutType: string) => {
    setAnchorEl(null);

    if (logoutType === "popup") {
      instance.logoutPopup();
    } else if (logoutType === "redirect") {
      instance.logoutRedirect();
    }
  };

  return (
    <div>
      <Button onClick={() => handleLogout("redirect")}>
        Logout using Redirect
      </Button>
      <Button onClick={() => handleLogout("popup")}>Logout using Popup</Button>
    </div>
  );
};
const SignInSignOutButton = () => {
  const { inProgress } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  if (isAuthenticated) {
    return <SignOutButton />;
  } else if (
    inProgress !== InteractionStatus.Startup &&
    inProgress !== InteractionStatus.HandleRedirect
  ) {
    // inProgress check prevents sign-in button from being displayed briefly after returning from a redirect sign-in. Processing the server response takes a render cycle or two
    return <SignInButton />;
  } else {
    return null;
  }
};
export async function getServerSideProps() {
  const query = gql`
    {
      frameworks {
        id
        name
      }
    }
  `;
  const data = await request("http://localhost:3000/api/graphql", query);
  const { frameworks } = data;
  return {
    props: {
      frameworks,
    },
  };
}
const Home: NextPage<{
  frameworks: {
    id: string;
    name: string;
  }[];
}> = ({ frameworks }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {" "}
        <SignInSignOutButton />
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>
        <div className={styles.grid}>
          {frameworks.map((f) => (
            <Button className={styles.card} key={f.id}>
              <h2>Documentation &rarr;</h2>
              <p>{f.name} </p>
            </Button>
          ))}
        </div>
      </main>
      <AuthenticatedTemplate>
        <Link href="/profile">Request Profile Information</Link>
      </AuthenticatedTemplate>

      <UnauthenticatedTemplate>
        Please sign-in to see your profile information.
      </UnauthenticatedTemplate>
    </div>
  );
};

export default Home;
