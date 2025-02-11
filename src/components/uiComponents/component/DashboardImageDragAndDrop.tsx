"use client";

import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";
import { useAdPostStore } from "@/stores/post-store";


export function DashboardImageDragAndDrop() {
  const { setImages } = useAdPostStore();
  const { toast } = useToast();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onDrop: any = useCallback((acceptedFiles: FileList[]) => {
    //get the files size and if it exceeds 16mb show error toast
    const fileSize = acceptedFiles.reduce(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (acc: number, cur: any) => acc + cur.size,
      0
    );

    if (fileSize > 18874368) {
      return toast({
        variant: "destructive",
        title: "File size exceeds",
        description: "All images size must be less than 16 mb.",
      });
    }

    if (acceptedFiles.length > 12) {
      return toast({
        variant: "destructive",
        title: "12 Images are Maximum",
      });
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    acceptedFiles.map((file: any) => {
      const changeFileFormat = new FileReader();
      changeFileFormat.readAsDataURL(file);
      changeFileFormat.onload = () => {
        setImages(changeFileFormat?.result);
      }
    });

  }, []);

  const { getRootProps, getInputProps, isDragActive, fileRejections } =
    useDropzone({
      onDrop,
      accept: {
        "image/jpeg": [],
        "image/png": [],
      },
    });

  if (fileRejections.length > 0) {
    toast({
      variant: "destructive",
      title: "Uh oh! Invalid Image format.",
      description: "Only JPEG and PNG images are supported.",
    });
  }

  return (
    <div className="min-h-24 relative h-fit w-full border-2 border-dashed cursor-pointer">
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className="font-medium absolute inset-0 w-full h-full flex items-center justify-center">
            Drop your file here
          </p>
        ) : (
          <div className="font-medium absolute inset-0 w-full h-full flex flex-col items-center justify-center left-0 right-0">
            <Image
              src={"/assets/uploadIcon.png"}
              alt="upload icon"
              width={500}
              height={1000}
              className="w-8"
            />
            Drag your file or click to upload
          </div>
        )}
      </div>
    </div>
  );
}