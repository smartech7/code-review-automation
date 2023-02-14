import { next, rewrite } from '@vercel/edge';

export const config = {
  matcher: '/api/github/webhooks',
};

export default async function middleware(request: any) {
  let json;

  try {
    console.log('enter');
    json = await request?.json?.();
  } catch {
    return rewrite(new URL('https://github.com/apps/cr-gpt'));
  }

  if (!json) {
    console.log('received is not a json');
    return rewrite(new URL('https://github.com/apps/cr-gpt'));
  }

  return rewrite(new URL('https://github.com/apps/cr-gpt'));
}
