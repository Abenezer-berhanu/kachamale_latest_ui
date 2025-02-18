import DetailPageWrapper from "@/components/uiComponents/component/DetailPageWrapper";
import React, { Suspense } from "react";

export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  return (
    <Suspense>
      <DetailPageWrapper slug={slug} />
    </Suspense>
  );
}
