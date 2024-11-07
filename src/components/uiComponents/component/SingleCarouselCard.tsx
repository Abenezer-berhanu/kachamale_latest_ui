import Image from "next/image";

interface propsInterface {
  title: string;
  description: string;
  image: string;
}

export const SingleCarouselCard = ({ data }: { data: propsInterface }) => {
  return (
    <div className="w-full max-w-[740px] min-h-[280px] tablet:min-h-[320px] bg-[url('/assets/AdBg.png')] bg-cover bg-main_blue rounded-md relative overflow-hidden">
      <div className="flex flex-col justify-start pt-5 gap-2 max-w-[350px] px-4 h-full z-20">
        <h2 className="w-full font-bold text-3xl text-white max-tablet:line-clamp-1">
          {data.title}
        </h2>
        <p className="w-full text-white">{data.description}</p>
      </div>
      <Image
        src={data.image}
        alt={data.title}
        width={500}
        height={500}
        className="w-full max-w-[350px] absolute bottom-2 right-1 z-0"
      />
    </div>
  );
};
