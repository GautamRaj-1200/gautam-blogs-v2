"use client";

import PostCard from "@/components/PostCard";
import { Post } from "@prisma/client";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/posts");
      const data = await response.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <section className="mx-auto max-w-5xl py-8">
      <h1 className="font-sour-gummy mb-8 px-4 text-center text-xl font-bold text-[var(--accent-color)]">
        What follows are my learnings, thoughts, and personal perspective.
      </h1>
      <div className="flex flex-col gap-4 px-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
