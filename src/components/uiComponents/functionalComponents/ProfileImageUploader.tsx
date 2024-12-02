"use client";
import { useProfileStore } from "@/hooks/profileHook/store";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import CustomeButton from "../component/CustomeButton";

export default function ProfileImageUploader() {
  const { setProfile, profile } = useProfileStore();
  const { toast } = useToast();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onDrop: any = useCallback((acceptedFiles: FileList) => {
    if (acceptedFiles.length > 1) {
      toast({
        variant: "destructive",
        title: "Size Exceeded",
        description: "only one image is allowed to upload.",
      });
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(acceptedFiles[0]);
    reader.onload = function () {
      console.log(reader.result);
      setProfile(reader.result as string);
    };
    reader.onerror = function () {
      setProfile("");
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "something went wrong please upload the file again",
      });
    };

    console.log(profile);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
      {profile && (
        <div className="flex">
          <Image
            src={profile as string}
            alt="text"
            width={100}
            height={100}
            className="w-8 h-8 rounded-full m-2 border p-1"
          />
          <CustomeButton
            title="remove"
            className="w-fit p-0 bg-white text-red-700"
            onClick={() => setProfile("")}
          />
        </div>
      )}
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <div
            className={`h-full min-h-28 rounded-lg w-full flex flex-col items-center justify-center bg-slate-200  `}
          >
            <Image
              src={"/assets/uploadIcon.png"}
              width={400}
              height={400}
              alt="upload image icon"
              className="w-10 h-10 animate-bounce"
            />
            <p>Drop the file here </p>
          </div>
        ) : (
          <div className="h-full min-h-28 rounded-lg w-full bg-slate-200 flex flex-col items-center justify-center">
            <Image
              src={"/assets/uploadIcon.png"}
              width={400}
              height={400}
              alt="upload image icon"
              className="w-10 h-10"
            />
            <p>upload profile </p>
          </div>
        )}
      </div>
    </div>
  );
}
