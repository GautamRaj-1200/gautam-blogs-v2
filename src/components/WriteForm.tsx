"use client";
import React, { useState } from "react";
import RichTextEditor from "./RichTextEditor";
import { useRouter } from "next/navigation";

const WriteForm = () => {
  const [title, setTitle] = useState<string>("");
  const [tags, setTags] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const handleSave = async () => {
    setIsLoading(true);
    const response = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({ title, tags, content }),
    });
    if (response.ok) {
      router.push("/");
      setIsLoading(false);
    } else {
      console.error("Failed to save post");
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="flex flex-col gap-4">
        <div>
          <input
            type="text"
            placeholder="title"
            className="w-full rounded-md border-2 border-gray-300 p-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="tags(comma separated)"
            className="w-full rounded-md border-2 border-gray-300 p-2"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>
        <RichTextEditor
          onChange={(newContent: string) => setContent(newContent)}
        />
        <button
          className="rounded-md bg-[var(--accent-color)] p-2 font-bold text-[var(--background)]"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </>
  );
};

export default WriteForm;
