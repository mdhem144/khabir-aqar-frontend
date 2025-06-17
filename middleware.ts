import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: ['/', '/((?!_next/static|_next/image|favicon.ico).*)']
};

export default function middleware(request: NextRequest) {
  const locale = request.nextUrl.locale || 'ar';
  request.headers.set('x-locale', locale);
  return NextResponse.next();
}
