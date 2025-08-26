"use client";

import { useState } from "react";
import Tiptap from "./TipTap";
import Preview from "./Preview";
import useEditorMode from "@/lib/hooks/useEditorMode";

interface RichTextEditorProps {
  initialContent?: string;
  onChange?: (content: string) => void;
  className?: string;
}

const RichTextEditor = ({
  initialContent = "",
  onChange,
  className = "",
}: RichTextEditorProps) => {
  const [content, setContent] = useState(initialContent);
  const { editorMode, handleEditorMode } = useEditorMode();

  const handleContentChange = (newContent: string) => {
    setContent(newContent);
    onChange?.(newContent);
  };

  return (
    <div className={className}>
      <div className="mb-4 flex grow gap-2 px-6">
        <button
          onClick={() => handleEditorMode("edit")}
          className={`cursor-pointer ${editorMode === "edit" ? "w-1/2 scale-110 bg-gray-900" : "flex w-1/2 items-center justify-center p-1"}`}
        >
          Edit
        </button>

        {/* <span className="h-full w-1 bg-gray-300">
          <span className="h-full w-1 bg-gray-300">|</span>
        </span> */}

        <button
          onClick={() => handleEditorMode("preview")}
          className={`cursor-pointer ${editorMode === "preview" ? "w-1/2 scale-110 bg-gray-900" : "flex w-1/2 items-center justify-center p-1"}`}
        >
          Preview
        </button>
      </div>

      {editorMode === "edit" ? (
        <Tiptap content={content} onChange={handleContentChange} />
      ) : (
        <Preview content={content} />
      )}
    </div>
  );
};

export default RichTextEditor;
