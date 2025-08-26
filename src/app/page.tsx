"use client";

import RichTextEditor from "@/components/RichTextEditor";

export default function Home() {
  const handleContentChange = (newContent: string) => {
    console.log("Content changed:", newContent);
  };

  return (
    <section className="mx-auto max-w-5xl py-8">
      <RichTextEditor onChange={handleContentChange} />
    </section>
  );
}
