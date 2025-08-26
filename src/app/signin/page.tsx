import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function SignIn() {
  return (
    <section className="mx-auto max-w-5xl py-8">
      <h1 className="font-sour-gummy text-center text-xl font-bold text-[var(--accent-color)]">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </h1>
    </section>
  );
}
