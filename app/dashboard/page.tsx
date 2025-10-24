'use client';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [s,setS]=useState<{loading:boolean;error?:string;data?:any[]}>({loading:true});
  useEffect(()=>{
    fetch('/api/books',{cache:'no-store'})
      .then(r=>r.json())
      .then(j=>setS({loading:false,data:j.data,error:j.ok?undefined:j.error}))
      .catch(e=>setS({loading:false,error:String(e)}));
  },[]);
  if (s.loading) return <main style={{padding:16}}>Loading…</main>;
  if (s.error)   return <main style={{padding:16,color:'crimson'}}>Error: {s.error}</main>;
  return (
    <main style={{padding:16}}>
      <h1>Books</h1>
      <ul>{s.data?.map((b:any)=>(<li key={b.id}><b>{b.title}</b>{b.author && <> – {b.author}</>}</li>))}</ul>
    </main>
  );
}
