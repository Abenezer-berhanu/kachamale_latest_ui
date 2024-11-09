import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface PropsType {
  category?: string;
  negotiation: string;
  yearOfManufacture: number | string;
  seats: number | string;
  color: string;
  interiorColor: string;
  bodyType: string;
  fuel: string;
  mileAge: number | string;
  numberOfCylinders: number | string;
}

function formatCamelCase(text: string) {
  return text
    .replace(/([A-Z])/g, " $1") // Insert space before each uppercase letter
    .replace(/^./, (str) => str.toUpperCase()); // Capitalize the first letter
}

export default function DetailPageDetailTable(props: PropsType) {
  return (
    <Table>
      <TableCaption>
        A list of Information about this {props.category}.
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Key</TableHead>
          <TableHead>Value</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Object.entries(props)
          .filter(([key]) => key !== "category") // Exclude "category"
          .map(([key, value]) => (
            <TableRow key={key}>
              <TableCell className="font-medium">
                {formatCamelCase(key)}
              </TableCell>
              <TableCell>{value}</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}
