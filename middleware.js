import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = request.nextUrl.clone();

  if (url.hostname.includes('vercel.app')) {
    // Servir robots.txt para el dominio de Vercel
    url.pathname = '/robots.txt';
    return NextResponse.rewrite(url);
  }

  // Servir robots-main.txt para el dominio principal
  url.pathname = '/robots-main.txt';
  return NextResponse.rewrite(url);
}