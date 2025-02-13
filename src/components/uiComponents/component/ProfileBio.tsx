"use client";
import { useState } from "react";
import ProfileFieldCard from "./ProfileFieldCard";
import { Textarea } from "@/components/ui/textarea";
import CustomeButton from "./CustomeButton";
import { useToast } from "@/hooks/use-toast";
import { changeProfileBio } from "@/actions/user.actions";

export default function ProfileBio({ bio }: { bio: string }) {
  const [enterBio, setEnterBio] = useState(false);
  const [newBio, setNewBio] = useState("");
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    setNewBio(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const updatedUser = await changeProfileBio(newBio);

      if (updatedUser.error) {
        toast({
          variant: "destructive",
          description: updatedUser.message,
        });
      }

      if (updatedUser.success) {
        toast({
          description: updatedUser.message,
        });
        setNewBio("");
        setEnterBio(false)
      }
    } catch (error) {
      toast({
        variant: "destructive",
        description: "Something went wrong please check your connection",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="mt-5 px-3 flex">
        <ProfileFieldCard title="Bio" desc={bio} />
        <p
          className="text-green-500 font-semibold cursor-pointer"
          onClick={() => setEnterBio(!enterBio)}
        >
          Update
        </p>
      </div>

      {enterBio && (
        <>
          <Textarea
            placeholder="Type your message here."
            className="my-2 max-w-[500px]"
            value={newBio}
            onChange={handleChange}
          />
          <CustomeButton
            title={loading ? "updating..." : "submit"}
            className="text-sm p-2"
            disabled={newBio.length < 6 || loading}
            onClick={handleSubmit}
          />
        </>
      )}
    </>
  );
}
