import { deleteHpc } from "@/actions/hpc.actions";
import { Trash } from "lucide-react";
import React from "react";

function HpcDeleteForm({ id }: { id: string }) {
  return (
    <form action={deleteHpc}>
      <input type="hidden" name="id" value={id} />
      <button type="submit">
        <Trash />
      </button>
    </form>
  );
}
  
export default HpcDeleteForm;
