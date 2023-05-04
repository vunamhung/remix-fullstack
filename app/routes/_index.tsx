import type { LoaderFunction, V2_MetaFunction } from '@remix-run/cloudflare';
import { getDbFromContext } from '~/lib/db.service.server';

export const meta: V2_MetaFunction = () => {
  return [{ title: 'New Remix App' }];
};

export const loader: LoaderFunction = async ({ context }) => {
  // const db = getDbFromContext(context);

  return {};
};

export default function Index() {
  return (
    <div className="container">
      <h1 className="text-blue-500">Welcome to Remix</h1>
      <ul>
        <li>
          <a target="_blank" href="https://remix.run/tutorials/blog" rel="noreferrer">
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/tutorials/jokes" rel="noreferrer">
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
