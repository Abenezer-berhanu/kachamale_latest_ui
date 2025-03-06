import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ThumbsUp } from "lucide-react";

interface PropsType {
  name: string;
  img: string;
  location: string;
  horsePower: number | string;
  price: number | string;
  condition: string;
  transmission: string;
  slug: string;
  like: number;
  view: number;
}

export default function HomePageCard(props: PropsType) {
  return (
    <Link
      href={props.slug}
      className="w-full shadow-md rounded-lg overflow-hidden flex flex-col gap-1 relative"
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
        <div className="flex items-center justify-end absolute top-2 right-2 p-2 rounded-full bg-white">
          <span className="flex items-center justify-center gap-1">
            <p>{props.like} </p>
            <ThumbsUp size={18} />
          </span>
        </div>
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
