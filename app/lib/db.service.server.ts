import type { AppLoadContext } from '@remix-run/cloudflare';
import type { DrizzleD1Database } from 'drizzle-orm/d1';
import { drizzle } from 'drizzle-orm/d1';

const contextWithDb = (context: AppLoadContext): context is { DB: D1Database } => {
  return 'DB' in context;
};

export const getDbFromContext = (context: AppLoadContext): DrizzleD1Database => {
  if (!contextWithDb(context)) {
    throw new Error('No database in context');
  }

  return drizzle(context.DB);
};
