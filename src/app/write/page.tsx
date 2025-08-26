import WriteForm from "@/components/WriteForm";
import { auth } from "@clerk/nextjs/server";

export default async function Write() {
  const { userId, redirectToSignIn } = await auth();

  if (!userId) {
    return redirectToSignIn();
  }

  return (
    <section className="mx-auto max-w-5xl py-8">
      <WriteForm />
    </section>
  );
}
