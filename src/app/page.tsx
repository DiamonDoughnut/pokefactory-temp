import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center relative min-h-screen gap-16 overflow-hidden font-[family-name:var(--font-geist-sans)]">
        <Image
          className="absolute top-0 left-0 -z-10 min-h-screen min-w-screen"
          src='/bumbleSpawn.webp'
          alt=""
          width={1028}
          height={1028}
        />
      <main className="flex flex-col gap-[32px] row-start-2 justify-center items-center bg-slate-800/80 p-12 rounded-2xl">
        <Image
          className=""
          src="/Pokefactory_2_logo_amber.png"
          alt="Pokefactory Logo"
          width={360}
          height={360}
          priority
        />
        <h2 className="text-2xl text-amber-400 font-bold">Site Under Construction</h2>

        <div className="flex gap-4 items-center flex-col w-full">
          <a
            className="rounded-ful min-w-48 max-w-48 rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://discord.gg/r9nV8bF2CX"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className=""
              src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/66e3d80db9971f10a9757c99_Symbol.svg"
              alt="Discord Logo"
              width={40}
              height={40}
            />
            Join us!
          </a>
          <a
            className="rounded-ful min-w-48 max-w-48 rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center gap-2 hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href=""
            target=""
            rel=""
            
          >
            <Image
              className=""
              src='https://cdn.modrinth.com/modrinth-new.png'
              alt="Modrinth Logo"
              width={40}
              height={40}
            />
            Get the pack!
          </a>
        </div>
      </main>
    </div>
  );
}
