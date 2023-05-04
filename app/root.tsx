import type { LinksFunction } from '@remix-run/cloudflare';
import { cssBundleHref } from '@remix-run/css-bundle';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, isRouteErrorResponse, useRouteError } from '@remix-run/react';
import { Document } from '~/components';
import { Toaster } from 'react-hot-toast';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: require('./assets/css/style.css') },
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/images/favicon.ico" />
        <Meta />
        <Links />
      </head>
      <body className="flex min-h-screen">
        <Toaster position="top-right" toastOptions={{ style: { borderRadius: '0', background: '#333', color: '#fff' } }} />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  console.log(error);

  // when true, this is what used to go to `CatchBoundary`
  if (isRouteErrorResponse(error)) {
    return (
      <Document title="404: This page could not be found.">
        <div className="container flex h-screen items-center justify-center">
          <h1 className="inline-flex items-center">
            <span className="border-r-2 border-black pr-2">404</span> <span className="ml-2 text-base">This page could not be found.</span>
          </h1>
        </div>
      </Document>
    );
  }

  return (
    <Document title="Uh-oh!">
      <div className="container flex h-screen items-center">
        <div>
          <h1>App Error</h1>
          <pre>Unknown error</pre>
        </div>
      </div>
    </Document>
  );
}
