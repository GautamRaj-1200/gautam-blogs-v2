"use client";

import Tiptap from "@/components/TipTap";
import { useState } from "react";

export default function Home() {
  const [content, setContent] = useState("");
  const onChange = (content: string) => {
    setContent(content);
  };
  return (
    <>
      <section className="mx-auto max-w-5xl py-8">
        <Tiptap content={content} onChange={onChange} />
      </section>
      <section className="mx-auto max-w-5xl py-8">
        <h2 className="text-lg font-bold">Content:</h2>
        <pre className="rounded-md bg-gray-900 p-4">{content}</pre>
      </section>
    </>
  );
}
