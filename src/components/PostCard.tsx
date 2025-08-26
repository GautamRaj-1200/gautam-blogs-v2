import { Post } from "@prisma/client";
import Link from "next/link";

const PostCard = ({ post }: { post: Post }) => {
  return (
    <>
      <Link
        href={`/posts/${post.id}`}
        className="flex items-center justify-between rounded-lg bg-[#0c1320] p-2 transition-colors duration-300 ease-in-out hover:bg-[#1a2330]"
      >
        <h2 className="font-sour-gummy text-accent-color text-lg font-bold">
          {post.title}
        </h2>
        <p className="font-sour-gummy text-sm text-gray-500">
          {post.createdAt instanceof Date
            ? post.createdAt.toLocaleDateString()
            : new Date(post.createdAt).toLocaleDateString()}
        </p>
      </Link>
    </>
  );
};

export default PostCard;
