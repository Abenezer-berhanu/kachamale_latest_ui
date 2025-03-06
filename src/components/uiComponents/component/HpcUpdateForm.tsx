"use client";
import { Pencil } from "lucide-react";
import { useActionState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { updateHpc } from "@/actions/hpc.actions";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

function HpcUpdateForm({ id }: { id: string }) {
  const [state, formAction, loading] = useActionState(updateHpc, null);
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
      push("/ad/hpc");
    }
  }, [state]);
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <button>
            <Pencil />
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Update Hpc</DialogTitle>
            <DialogDescription>
              Make changes to Hpc here. Click save when you{"'"}re done.
            </DialogDescription>
          </DialogHeader>
          <form className="grid gap-4 py-4" action={formAction}>
            <div className=" grid-cols-4  flex flex-col items-start gap-2">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input id="title" className="col-span-3" name="title" />
            </div>

            <div className=" grid-cols-4 flex flex-col items-start gap-2">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                id="description"
                name="description"
                className="col-span-3"
              />
            </div>

            <div className=" grid-cols-4 flex flex-col items-start gap-2">
              <Label htmlFor="link" className="text-right">
                Link
              </Label>
              <Input id="link" name="link" className="col-span-3" />
            </div>
            <input type="hidden" value={id} name="id" />
            <Button type="submit" disabled={loading}>
              {loading ? "updating..." : "Save changes"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default HpcUpdateForm;
