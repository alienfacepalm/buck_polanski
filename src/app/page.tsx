import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="rounded-full overflow-hidden w-[30vw] h-[30vw] min-w-[200px] min-h-[200px] max-w-[400px] max-h-[400px]">
          <Image
            src="/img/phantom.jpg"
            alt="Phantom"
            width={400}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">  
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/about"
        >
          About Buck
        </Link>
      </footer>
    </div>
  );
}
