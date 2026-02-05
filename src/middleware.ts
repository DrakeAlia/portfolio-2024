import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Add security headers
  response.headers.set('X-DNS-Prefetch-Control', 'on');
  response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

  // Add caching headers for static assets
  const pathname = request.nextUrl.pathname;

  if (pathname.startsWith('/_next/static/')) {
    // Cache static assets for 1 year
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  } else if (pathname.startsWith('/images/') || pathname.startsWith('/icons/')) {
    // Cache images for 1 week with revalidation
    response.headers.set('Cache-Control', 'public, max-age=604800, stale-while-revalidate=86400');
  } else if (pathname.startsWith('/api/')) {
    // Don't cache API routes
    response.headers.set('Cache-Control', 'no-store, must-revalidate');
  } else {
    // Cache pages for 1 hour with revalidation
    response.headers.set('Cache-Control', 'public, max-age=3600, stale-while-revalidate=60');
  }

  // Add performance hints
  response.headers.set('X-DNS-Prefetch-Control', 'on');

  return response;
}

// Configure which paths the middleware runs on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
