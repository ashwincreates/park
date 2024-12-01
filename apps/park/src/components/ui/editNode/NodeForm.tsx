import { FormControl, FormLabel, Input, Textarea } from "@mui/joy";
import { useNode } from "../../../hooks/useNode";
import { useEffect, useState } from "react";
import { Action } from "../../../types/NewNodeReducer";

function NodeForm() {
  const { newNode, updateNode } = useNode();
  const [node, setNode] = useState(newNode.node);
  const [dirty, setDirty] = useState(false);

  console.log("node form")

  const handleChange = (field: "title" | "description", value: string) => {
    setDirty(true);
    setNode((n) => ({ ...n, [field]: value }));
    console.log(node.title)
  };

  useEffect(() => {
    return () => {
      if (dirty) {
        console.log("save")
        updateNode({ action: Action.UPDATE_NODE, payload: { node: node } });
      }
    };
  }, [dirty, node]);

  return (
    <>
      <FormControl>
        <FormLabel>Title</FormLabel>
        <Input
          placeholder="title"
          value={node.title}
          onChange={(e) => handleChange("title", e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Description</FormLabel>
        <Textarea
          placeholder="description"
          value={node.description}
          onChange={(e) => handleChange("description", e.target.value)}
          minRows={4}
          maxRows={4}
        />
      </FormControl>
    </>
  );
}

export default NodeForm;
