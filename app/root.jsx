import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./tailwind.css";

export const links = () => [{ rel: "stylesheet", href: styles }];

export const meta = () => ({
  charset: "utf-8",
  title: "Arvind Kumar Thoppe",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="eb4SQpR7QO4ofZin7D_uSKiOnZjDiA897oRmuEuJmTw"
        />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
