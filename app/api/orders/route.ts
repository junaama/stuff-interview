import { supabase } from '@/lib/supabaseClient';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  // TODO: query orders for a given user_id from query params
  // join with products to get product name + total price
  return NextResponse.json({ data: [] });
}
