const PostCardSkeleton = () => {
  return (
    <div className="relative mb-2 flex h-8 overflow-hidden rounded-lg bg-[#0c1320] p-2">
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
};

export default PostCardSkeleton;
