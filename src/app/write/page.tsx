import RichTextEditor from "@/components/RichTextEditor";
import { auth } from "@clerk/nextjs/server";

export default async function Write() {
  const { userId, redirectToSignIn } = await auth();

  if (!userId) {
    return redirectToSignIn();
  }

  return (
    <section className="mx-auto max-w-5xl py-8">
      <RichTextEditor
        onChange={(newContent: string) => {
          console.log("Content changed:", newContent);
        }}
      />
    </section>
  );
}
