import React from "react";
import { Editor } from "@tiptap/react";
import {
  Bold,
  Italic,
  Strikethrough,
  Heading1,
  Heading2,
  Heading3,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  List,
  ListOrdered,
  Code,
  Code2Icon,
  Highlighter,
  Underline,
  Subscript,
  Superscript,
} from "lucide-react";

const MenuBar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null;
  }

  const buttonBase =
    "px-3 py-1 text-sm rounded-lg border border-gray-300 hover:bg-gray-900 transition ease-in-out duration-300";

  return (
    <div className="mb-4 flex flex-wrap items-center justify-center gap-3">
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`${buttonBase} ${editor.isActive("heading", { level: 1 })} ? "is-active" : ""`}
      >
        <Heading1 />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`${buttonBase} ${editor.isActive("heading", { level: 2 })} ? "is-active" : ""`}
      >
        <Heading2 />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={`${buttonBase} ${editor.isActive("heading", { level: 3 })} ? "is-active" : ""`}
      >
        <Heading3 />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`${buttonBase} ${editor.isActive("bold")} ? "is-active" : ""`}
      >
        <Bold />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`${buttonBase} ${editor.isActive("italic")} ? "is-active" : ""`}
      >
        <Italic />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={`${buttonBase} ${editor.isActive("strike")} ? "is-active" : ""`}
      >
        <Strikethrough />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        className={`${buttonBase} ${editor.isActive({ textAlign: "left" })} ? "is-active" : ""`}
      >
        <AlignLeft />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        className={`${buttonBase} ${editor.isActive({ textAlign: "center" })} ? "is-active" : ""`}
      >
        <AlignCenter />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        className={`${buttonBase} ${editor.isActive({ textAlign: "right" })} ? "is-active" : ""`}
      >
        <AlignRight />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("justify").run()}
        className={`${buttonBase} ${editor.isActive({ textAlign: "justify" })} ? "is-active" : ""`}
      >
        <AlignJustify />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`${buttonBase} ${editor.isActive("bulletList")} ? "is-active" : ""`}
      >
        <List />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`${buttonBase} ${editor.isActive("orderedList")} ? "is-active" : ""`}
      >
        <ListOrdered />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        className={`${buttonBase} ${editor.isActive("code")} ? "is-active" : ""`}
      >
        <Code />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={`${buttonBase} ${editor.isActive("codeBlock")} ? "is-active" : ""`}
      >
        <Code2Icon />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        className={`${buttonBase} ${editor.isActive("highlight")} ? "is-active" : ""`}
      >
        <Highlighter />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={`${buttonBase} ${editor.isActive("underline")} ? "is-active" : ""`}
      >
        <Underline />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleSubscript().run()}
        className={`${buttonBase} ${editor.isActive("subscript")} ? "is-active" : ""`}
      >
        <Subscript />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleSuperscript().run()}
        className={`${buttonBase} ${editor.isActive("superscript")} ? "is-active" : ""`}
      >
        <Superscript />
      </button>
    </div>
  );
};

export default MenuBar;
