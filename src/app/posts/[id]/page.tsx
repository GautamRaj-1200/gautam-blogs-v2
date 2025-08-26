import { Post } from "@prisma/client";
import "./PostPage.css";

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${id}`,
  );
  const postData: Post = await res.json();
  //   console.log(postData);

  return (
    <div className="mx-auto max-w-full px-4 py-8 md:max-w-5xl md:px-2">
      <h1 className="mb-3 text-center text-2xl font-bold">{postData.title}</h1>
      {/* Content is in HTML format */}
      <div
        dangerouslySetInnerHTML={{ __html: postData.content }}
        className="render-html"
      />
    </div>
  );
}
