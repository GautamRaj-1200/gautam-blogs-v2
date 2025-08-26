const Preview = ({ content }: { content: string }) => {
  return (
    <div className="min-h-32 rounded-md bg-gray-900 p-4">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default Preview;
