"use client";
import Image from "next/image";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export default function ProfileDropZone() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onDrop: any = useCallback((acceptedFiles: FileList[]) => {
    console.log(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="min-h-24 relative h-fit w-full border-2 border-dashed cursor-pointer bg-slate-100 rounded-lg">
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
