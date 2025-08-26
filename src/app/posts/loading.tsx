import SinglePostSkeleton from "@/components/SinglePostSkeleton";

export default function Loading() {
  return (
    <div className="mx-auto max-w-full px-4 py-8 md:max-w-5xl md:px-2">
      <SinglePostSkeleton />
    </div>
  );
}
