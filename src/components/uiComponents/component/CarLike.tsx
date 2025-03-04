"use client";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Loading from "./Loading";
import { toggleLike } from "@/actions/car.actions";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

function CarLike({ isLiked, carId }: { isLiked: boolean; carId: string }) {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const { refresh } = useRouter();
  const [isCarLiked, setIsCarLiked] = useState(isLiked);

  const handleClick = async () => {
    try {
      
      setLoading(true);
      const res = await toggleLike(carId);
      if (res.error) {
        toast({
          variant: "destructive",
          description: res.message,
        });
      } else if (res.success) {
        toast({
          description: res.message,
        });
        setIsCarLiked(res.hasLiked!)
        refresh();
      }
    } catch (error) {
      if (error) {
        toast({
          variant: "destructive",
          description: "something went wrong",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return !isCarLiked ? (
    <button onClick={handleClick}>
      {loading ? (
        <Loading size="small" />
      ) : (
        <FaRegHeart size={24} className="text-red-500" />
      )}
    </button>
  ) : (
    <button onClick={handleClick}>
      {loading ? (
        <Loading size="small" />
      ) : (
        <FaHeart size={24} className="text-red-500" />
      )}
    </button>
  );
}

export default CarLike;
