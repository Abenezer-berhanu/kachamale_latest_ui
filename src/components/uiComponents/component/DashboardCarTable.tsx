import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function DashboardCarTable({ cars }: { cars: CarType[] }) {
  return (
    <div>
      <Table>
        <TableCaption>Top 5 expensive cars from your posts</TableCaption>
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
                  item?.make +
                    " " +
                    item?.model +
                    " " +
                    item?.color +
                    " " +
                    item?.yearOfManufacture
                )}
              </TableCell>
              <TableCell>{item.color}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell className="text-right">{item.sellerStreet}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
