import { Post } from "@prisma/client";
import Link from "next/link";

const PostCard = ({ post }: { post: Post }) => {
  return (
    <>
      <Link
        href={`/posts/${post.id}`}
        className="flex flex-wrap items-center gap-4 rounded-lg bg-[#0c1320] p-2 transition-colors duration-300 ease-in-out hover:bg-[#1a2330] md:flex-nowrap md:justify-start"
      >
        <p className="font-space-grotesk hidden text-sm text-gray-500 md:block">
          {post.createdAt instanceof Date
            ? post.createdAt.toLocaleDateString()
            : new Date(post.createdAt).toLocaleDateString()}
        </p>
        <h2 className="font-space-grotesk text-accent-color text-lg font-bold">
          {post.title}
        </h2>
      </Link>
    </>
  );
};

export default PostCard;
