import { Post } from "@prisma/client";
import Link from "next/link";

const PostCard = ({ post }: { post: Post }) => {
  return (
    <>
      <Link href={`/posts/${post.id}`}>
        <h2 className="text-lg font-bold">{post.title}</h2>
      </Link>
    </>
  );
};

export default PostCard;
