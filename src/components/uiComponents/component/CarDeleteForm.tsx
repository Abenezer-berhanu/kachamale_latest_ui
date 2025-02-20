import { handleDeleteCarClick } from "@/actions/car.actions";
import { Trash2 } from "lucide-react";

export default function CarDeleteForm({ id }: { id: string }) {
  return (
    <form action={handleDeleteCarClick}>
      <input type="hidden" name="carId" value={id} />
      <button type="submit">
        <Trash2 />
      </button>
    </form>
  );
}
