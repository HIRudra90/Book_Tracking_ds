﻿import { createClient } from '@supabase/supabase-js';

export function getSupabaseAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE;
  if (!url) throw new Error('SUPABASE URL missing');
  if (!key) throw new Error('SUPABASE SERVICE ROLE missing');
  return createClient(url, key, { auth: { persistSession: false } });
}
