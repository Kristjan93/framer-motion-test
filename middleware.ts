import { NextRequest, NextResponse } from 'next/server'


export function middleware(request: NextRequest) {
  console.log(request.nextUrl.pathname)
  if (request.nextUrl.pathname.startsWith('/bla')) {
    const count = (request.nextUrl.pathname.match(/bla/g) || []).length
    return NextResponse.rewrite(new URL('/blax' + count, request.url))
  }
}