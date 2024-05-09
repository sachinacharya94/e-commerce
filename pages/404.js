import Link from "next/link";

export default function Custom404() {
    return (
        <>
       <div class="bg-gradient-to-br from-slate-500 via-slate-400 to-slate-300 w-[80%] mx-auto">
    <div class="min-h-screen flex items-center justify-center">
        <div class="max-w-md text-center">
            <h1 class="text-4xl font-bold text-white mb-4">404 - Page Not Found</h1>
            <p class="text-lg text-white mb-8">The page you are looking for does not exist.</p>
            <Link href="/" class="text-white underline hover:text-pink-100">Go back to homepage</Link>
        </div>
    </div>
</div>
        </>
    )
  }