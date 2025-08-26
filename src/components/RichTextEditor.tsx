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
      <div className="mb-4 flex items-center justify-center gap-2 bg-blue-950/50 p-2">
        <button
          onClick={() => handleEditorMode("edit")}
          className={`text-md cursor-pointer rounded-lg px-3 py-1 shadow-lg transition duration-300 ease-in-out hover:bg-gray-900 ${editorMode === "edit" ? "bg-gray-900" : ""}`}
        >
          Edit
        </button>
        <span className="h-full w-1 bg-gray-300">
          <span className="h-full w-1 bg-gray-300">|</span>
        </span>
        <button
          onClick={() => handleEditorMode("preview")}
          className={`text-md cursor-pointer rounded-lg px-3 py-1 transition duration-300 ease-in-out hover:bg-gray-900 ${editorMode === "preview" ? "bg-gray-900" : ""}`}
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
