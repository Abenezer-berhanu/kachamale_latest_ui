"use client";
import { useToast } from "@/hooks/use-toast";
import { X } from "lucide-react";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import CustomeButton from "./CustomeButton";
import { changeProfilePicture } from "@/actions/user.actions";

export default function ProfileDropZone() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [image, setImage] = useState<any>(null);
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onDrop: any = useCallback((acceptedFiles: FileList[]) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const firstFile: any = acceptedFiles[0];
    const fileSizeLimit = 1261525 * 5;
    if (firstFile.size > fileSizeLimit) {
      toast({
        variant: "destructive",
        title: "File size limit exceeded",
        description: "File should be larger than 5MB",
      });
    }

    const changeFileFormat = new FileReader();
    changeFileFormat.readAsDataURL(firstFile);
    changeFileFormat.onload = () => {
      setImage(changeFileFormat?.result);
    };
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleUploadImageClick = async () => {
    setLoading(true);
    try {
      const uploadedImage = await changeProfilePicture(image);
      if (uploadedImage.error) {
        toast({
          variant: "destructive",
          title: "Error uploading image",
          description: uploadedImage.error,
        });
      } else {
        toast({
          title: "Success",
          description: uploadedImage.message,
        });
        setImage(null);
      }
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        title: "Error uploading image",
        description: "something went wrong please try again",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {image && (
        <div className="my-2 flex justify-between w-full">
          <div className="relative">
            <Image
              className="w-12 h-12 object-cover"
              alt="New profile image"
              src={image}
              width={60}
              height={60}
            />
            <X
              className="absolute top-0 right-0 text-red-500 bg-white size-4 hover:text-red-700 hover:size-5"
              onClick={() => setImage(null)}
            />
          </div>
          <div>
            <CustomeButton
              title={loading ? "Uploading..." : "Change profile"}
              className="text-sm px-2 py-2"
              disabled={loading || !image}
              onClick={handleUploadImageClick}
            />
          </div>
        </div>
      )}
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
    </>
  );
}
