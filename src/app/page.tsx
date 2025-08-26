"use client";

import PostCard from "@/components/PostCard";
import PostCardSkeleton from "@/components/PostCardSkeleton";
import { Post } from "@prisma/client";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const NumberOfSkeletonPosts = Array.from({ length: 10 }, (_, index) => index);

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
      <h1 className="font-space-grotesk mb-8 px-4 text-center text-xl font-bold tracking-wide text-[var(--accent-color)]">
        What follows are my learnings, thoughts, and personal perspective.
      </h1>
      <div className="flex flex-col gap-4 px-4">
        {posts.length === 0
          ? NumberOfSkeletonPosts.map((index) => (
              <PostCardSkeleton key={index} />
            ))
          : posts.map((post) => <PostCard key={post.id} post={post} />)}
      </div>
    </section>
  );
}
