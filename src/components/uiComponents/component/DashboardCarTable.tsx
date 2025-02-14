import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trash2 } from "lucide-react";

import UpdateCarInfoDialoge from "./UpdateCarInfoDialoge";

export default function DashboardCarTable({
  cars,
  action,
}: {
  cars: CarInfoType[];
  action?: boolean;
}) {
  return (
    <div className="min-w-[800px]">
      <Table>
        <TableCaption>
          {cars.length > 0 ? "Cars from your posts" : "No car has been found"}
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
                <Badge
                  style={{
                    backgroundColor: item.color ? item.color : "#8a8d91",
                  }}
                ></Badge>
              </TableCell>
              <TableCell>{item.price?.toLocaleString()}</TableCell>
              <TableCell className="text-right">
                {item.sellerCity + " " + item.sellerStreet}
              </TableCell>
              {action && (
                <TableCell className="flex justify-end gap-3">
                  <div className="text-red-500">
                    <Trash2 />
                  </div>
                  <div>
                    <UpdateCarInfoDialoge carId={item.id} />
                  </div>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
