import { getAllHpc } from "@/actions/hpc.actions";
import HpcTable from "@/components/uiComponents/component/HpcTable";
import React from "react";

export default async function page() {
  const allHpc = await getAllHpc();

  return (
    <div>
      {/* @ts-expect-error because */}
      <HpcTable hpc={allHpc} action={true}/>
    </div>
  );
}
