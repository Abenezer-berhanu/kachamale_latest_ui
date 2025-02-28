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
import UpdateCarInfoDialoge from "./UpdateCarInfoDialoge";
import CarDeleteForm from "./CarDeleteForm";
import { Suspense } from "react";
import Loading from "./Loading";

export default function DashboardCarTable({
  cars,
  action,
}: {
  cars: CarInfoType[];
  action?: boolean;
}) {
  return (
    <Table>
      <TableCaption>
        {cars.length > 0 ? "Cars from your posts" : "No car has been found"}
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead className="max-md:hidden">Color</TableHead>
          <TableHead>Price</TableHead>
          <TableHead className="text-right max-md:hidden">Address</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {cars.map((item, idx) => (
          <TableRow key={idx}>
            <TableCell className="font-medium">
              {String(
                item?.make + " " + item?.model + " " + item?.yearOfManufacture
              )}
            </TableCell>
            <TableCell className="max-md:hidden">
              <Badge
                style={{
                  backgroundColor: item.color ? item.color : "#8a8d91",
                }}
              ></Badge>
            </TableCell>
            <TableCell>{item.price?.toLocaleString()}</TableCell>
            <TableCell className="text-right max-md:hidden">
              {item.sellerCity + " " + item.sellerStreet}
            </TableCell>
            {action && (
              <TableCell className="flex max-md:flex-col items-center justify-end  gap-3">
                <div className="text-red-500" title="delete">
                  <CarDeleteForm id={item.id} />
                </div>
                <Suspense fallback={<Loading />}>
                  <UpdateCarInfoDialoge carId={item.id} />
                </Suspense>
              </TableCell>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
