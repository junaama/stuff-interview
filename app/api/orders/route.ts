import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '@/lib/supabaseClient';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // TODO: query orders for a given user_id from query params
  // join with products to get product name + total price
  res.status(200).json({ data: [] });
}
