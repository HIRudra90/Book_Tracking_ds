import { NextResponse } from 'next/server';
import { getSupabaseAdmin } from '../../lib/supabase-server';
export const dynamic = 'force-dynamic';

export async function GET() {
  const supabaseAdmin = getSupabaseAdmin();
  const { data, error } = await supabaseAdmin.from('books').select('*').order('created_at', { ascending: false });
  if (error) return NextResponse.json({ ok:false, error: error.message }, { status:500 });
  return NextResponse.json({ ok:true, data });
}

export async function POST(req: Request) {
  const supabaseAdmin = getSupabaseAdmin();
  const { title, author } = await req.json().catch(() => ({}));
  if (!title) return NextResponse.json({ ok:false, error:'Missing title' }, { status:400 });
  const { data, error } = await supabaseAdmin.from('books').insert([{ title, author }]).select().single();
  if (error) return NextResponse.json({ ok:false, error:error.message }, { status:500 });
  return NextResponse.json({ ok:true, data }, { status:201 });
}
