import Image from 'next/image'
import { redirect } from "next/navigation";

export default function Home() {
   const isLoggedIn = false;
   if (!isLoggedIn) {
    redirect("/login");  // forces user to see login first
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome dashbaord</h1>
     
    </main>
  )
}
