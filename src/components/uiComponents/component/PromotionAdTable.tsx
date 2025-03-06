import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import React, { Suspense } from "react";
  import Image from "next/image";
  import Loading from "./Loading";
import PaDeleteForm from "./PaDeleteForm";
import PaUpdateForm from "./PaUpdateForm";
  
  interface HpcType {
    id: string;
    title: string;
    link: string | null;
    img: string | null;
    createdAt: Date;
    updatedAt: Date;
    description: string;
  }
  
  function PromotionAdTable({ pa, action }: { pa: HpcType[]; action: boolean }) {
    return (
      <Table>
        <TableCaption>
          {pa.length > 0 ? "HPC from your posts" : "No HPC has been found"}
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Image</TableHead>
            <TableHead className="max-md:hidden">Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="text-right max-md:hidden">Link</TableHead>
            <TableHead className="text-right max-md:hidden"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {pa.length > 0 &&
            pa.map((item, idx) => (
              <TableRow key={idx}>
                <TableCell className="font-medium">
                  <Image
                    alt={item.title}
                    src={String(item?.img)}
                    width={500}
                    height={500}
                    className="w-12"
                  />
                </TableCell>
                <TableCell className="max-md:hidden">{item.title}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell className="text-right max-md:hidden">
                  {item.link}
                </TableCell>
                {action && (
                  <TableCell className="flex max-md:flex-col items-center justify-end  gap-3">
                    <div className="text-red-500" title="delete">
                      <Suspense fallback={<Loading />}>
                        <PaDeleteForm id={item.id} />
                      </Suspense>
                    </div>
                    <Suspense fallback={<Loading />}>
                      <PaUpdateForm id={item.id} />
                    </Suspense>
                  </TableCell>
                )}
              </TableRow>
            ))}
        </TableBody>
      </Table>
    );
  }
  
  export default PromotionAdTable;
  