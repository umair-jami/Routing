'use client'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  let route=useRouter()
  return (
    <div className="text-center mt-80">
      <button onClick={()=>route.push('/')}>Home</button>
      <button onClick={()=>route.push('/navbar')}>Navbar</button>
      <button onClick={()=>route.push('/about')}>About</button>
      <button onClick={()=>route.push('/contact')}>Contact</button>
    </div>
  );
}
