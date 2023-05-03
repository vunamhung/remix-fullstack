import type { FC, ReactNode } from 'react';
import { Links, Meta, Scripts } from '@remix-run/react';

export const Document: FC<{ children: ReactNode; title: string }> = ({ children, title }) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <link rel="icon" type="image/svg+xml" href="/images/favicon.ico" />
      <title>{title}</title>
      <Meta />
      <Links />
    </head>
    <body>
      {children}
      <Scripts />
    </body>
  </html>
);
