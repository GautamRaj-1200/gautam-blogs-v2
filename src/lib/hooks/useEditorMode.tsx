import { useState } from "react";

const useEditorMode = () => {
  const [editorMode, setEditorMode] = useState<"edit" | "preview">("edit");

  const handleEditorMode = (mode: "edit" | "preview") => {
    setEditorMode(mode);
  };

  return { editorMode, handleEditorMode };
};

export default useEditorMode;
