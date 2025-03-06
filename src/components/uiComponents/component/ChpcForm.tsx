"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import CustomeButton from "./CustomeButton";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import ChpcImageDropZone from "./ChpcImageDropZone";
import { useChpcStore } from "@/stores/chpc-store";
import { useRouter } from "next/navigation";
import { createChpc } from "@/actions/hpc.actions";

function ChpcForm() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const { push } = useRouter();
  const { image, setImage } = useChpcStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChpcType>();
  const onSubmit: SubmitHandler<ChpcType> = async (data) => {
    try {
      setLoading(true);

      const response = await createChpc({
        title: data.title,
        img: image,
        description: data.description,
        link: data?.link,
      });
      if (response?.error) {
        toast({
          variant: "destructive",
          description: response.message,
        });
      }

      setImage("");
      toast({
        description: response?.message || "successfully created",
      });
      push("/hpc");
    } catch (error) {
      console.log(error);
      if (error) {
        toast({
          variant: "destructive",
          description: "something went wrong pleaser try again",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-[550px] mx-auto flex flex-col gap-3 border p-3 rounded-lg shadow-sm"
    >
      {/* register your input into the hook by invoking the "register" function */}
      <div className="flex flex-col text-start gap-1">
        <label className="font-semibold">Main Title</label>
        <input
          defaultValue=""
          {...register("title", { required: true })}
          placeholder="Title for the carousel"
          className="border outline-none indent-2 rounded-md h-10 focus:bg-white bg-muted block w-full"
        />
        {errors.title && (
          <p className="text-sm text-red-600">This field is required</p>
        )}
      </div>

      <div className="flex flex-col text-start gap-1">
        <label className="font-semibold">Description</label>
        <input
          {...register("description", { required: true })}
          className="border outline-none indent-2 rounded-md h-10 focus:bg-white bg-muted block w-full"
          placeholder="Description for the carousel"
        />
        {errors.description && (
          <p className="text-sm text-red-600">This field is required</p>
        )}
      </div>

      <div className="flex flex-col text-start gap-1">
        <label className="font-semibold">
          Link<small> &nbsp;optional</small>
        </label>
        <input
          {...register("link")}
          className="border outline-none indent-2 rounded-md h-10 focus:bg-white bg-muted block w-full"
          placeholder="Link for more details"
        />
      </div>

      <ChpcImageDropZone />

      <CustomeButton
        type="Submit"
        title={loading ? "loading..." : "Submit"}
        disabled={loading}
      />
    </form>
  );
}

export default ChpcForm;
