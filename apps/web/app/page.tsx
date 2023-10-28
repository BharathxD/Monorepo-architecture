import Link from "next/link";

const Page = () => {
  return (
    <main className="bg-gradient-top-bottom flex h-screen flex-col items-start justify-center gap-4 p-10 md:items-center">
      <h1 className="font-display text-4xl md:text-6xl">The Monolithic Architecture Boilerplate</h1>
      <p className="text-2xl">
        Powered by{" "}
        <Link className="underline" href="https://turbo.build" target="_blank" referrerPolicy="no-referrer">
          Turborepo
        </Link>
      </p>
    </main>
  );
};

export default Page;
