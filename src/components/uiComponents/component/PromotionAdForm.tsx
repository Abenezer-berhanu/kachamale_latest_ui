"use client";
"use client";
import { useActionState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import ChpcImageDropZone from "./ChpcImageDropZone";
import { useChpcStore } from "@/stores/chpc-store";
import { createPA } from "@/actions/pa.actions";

function PromotionAdForm() {
  const [state, formAction, loading] = useActionState(createPA, null);
  const { image,setImage } = useChpcStore();
  const { toast } = useToast();
  const { push } = useRouter();

  useEffect(() => {
    if (state?.error) {
      toast({
        variant: "destructive",
        description: state.message,
      });
    }

    if (state?.success) {
      toast({
        description: state.message,
      });
      setImage("")
      push("/ad/pa");
    }
  }, [state]);

  return (
    <form
      className="grid gap-4 py-4 w-full max-w-[620px] mx-auto rounded-md p-4 shadow-md"
      action={formAction}
    >
      <div className=" grid-cols-4  flex flex-col items-start gap-2">
        <Label htmlFor="title" className="text-right">
          Title
        </Label>
        <Input id="title" className="col-span-3" name="title" required />
      </div>

      <div className=" grid-cols-4 flex flex-col items-start gap-2">
        <Label htmlFor="description" className="text-right">
          Description
        </Label>
        <Input
          id="description"
          name="description"
          className="col-span-3"
          required
        />
      </div>

      <div className=" grid-cols-4 flex flex-col items-start gap-2">
        <Label htmlFor="link" className="text-right">
          Link
        </Label>
        <Input id="link" name="link" className="col-span-3" required />
      </div>

      <Input type="hidden" name="image" value={image || ""} />
      <ChpcImageDropZone />

      <Button type="submit" disabled={loading}>
        {loading ? "Creating Ad..." : "Create Ad"}
      </Button>
    </form>
  );
}

export default PromotionAdForm;
