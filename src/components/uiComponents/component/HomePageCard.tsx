import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface PropsType {
  name: string;
  img: string;
  location: string;
  horsePower: number | string;
  price: number | string;
  condition: string;
  transmission: string;
  slug: string;
}

export default function HomePageCard(props: PropsType) {
  return (
    <Link
      href={props.slug}
      className="w-full shadow-md rounded-lg overflow-hidden flex flex-col gap-1"
    >
      <div className="w-full">
        <Image
          src={props.img}
          alt={props.name}
          unoptimized
          width={500}
          height={300}
          className="w-full h-[200px] object-cover"
        />
      </div>
      <div className="p-3 flex-grow">
        <h1 className="text-xl font-bold line-clamp-1">{props.name}</h1>
        <small className="line-clamp-1">{props.location}</small>
        <div className="flex justify-between my-1 items-center">
          <h1 className="text-xl font-bold">
            ETB {props.price?.toLocaleString()}
          </h1>
          <h2 className="text-lg font-bold text-main_blue">
            {props.horsePower} <small> HP</small>
          </h2>
        </div>
        <div className="flex gap-3 overflow-hidden">
          <Badge variant="outline">{props.condition}</Badge>
          <Badge variant="outline">{props.transmission}</Badge>
        </div>
      </div>
    </Link>
  );
}
