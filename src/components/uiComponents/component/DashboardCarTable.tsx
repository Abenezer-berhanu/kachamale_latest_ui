"use client"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PencilIcon, Trash2 } from "lucide-react";

export default function DashboardCarTable({
  cars,
  action,
}: {
  cars: CarType[];
  action?: boolean;
}) {

  return (
    <div>
      <Table>
        <TableCaption>
          {cars.length > 0
            ? "Top 5 expensive cars from your posts"
            : "You have posted no car yet"}
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Color</TableHead>
            <TableHead>Price</TableHead>
            <TableHead className="text-right">Address</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cars.map((item, idx) => (
            <TableRow key={idx}>
              <TableCell className="font-medium w-[240px]">
                {String(
                  item?.make + " " + item?.model + " " + item?.yearOfManufacture
                )}
              </TableCell>
              <TableCell>
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: item?.color || "transparent" }}
                  title={item?.color || "Default color"}
                ></div>
              </TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell className="text-right">{item.sellerStreet}</TableCell>
              {action && (
                <TableCell className="flex justify-end gap-3">
                  <button className="text-red-500">
                    <Trash2 size={20} />
                  </button>
                  <button>
                    <PencilIcon size={20} />
                  </button>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
