import { NextResponse } from 'next/server';
import { fetchProperties } from '@/lib/db';

export const runtime = 'edge';

export async function GET() {
  const data = await fetchProperties();
  return NextResponse.json(data, { status: 200 });
}
