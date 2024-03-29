'use server';

import { NextResponse } from 'next/server';
import { getTokenDataFromCookies } from './lib/token';

export default async function middleware(request) {
  if (
    request.nextUrl.pathname.startsWith('/teacher') ||
    request.nextUrl.pathname.startsWith('/student')
  ) {
    const token = await getTokenDataFromCookies();
    const response = NextResponse.next();

    if (token.error) {
      return NextResponse.redirect(new URL('/auth', request.url));
    }

    return response;
  }
}

/**

// teacher route authorization
  if (request.nextUrl.pathname.startsWith('/teacher')) {
    const token = await getTokenDataFromCookies();
    const response = NextResponse.next();

    if (token.error) {
      return NextResponse.redirect(new URL('/auth', request.url));
    }
    if (token.data.role !== 'teacher') {
      return NextResponse.redirect(new URL('/', request.url));
    }

    switch (token.data?.role) {
      case 'teacher':
        return response;
      case 'both':
        return response;
      case 'admin':
        return response;
      case 'student':
        return NextResponse.redirect(new URL('/student', request.url));
      default:
        return NextResponse.redirect(new URL('/', request.url));
    }
  }

 */
