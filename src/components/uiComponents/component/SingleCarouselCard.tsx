import Image from "next/image";

interface propsInterface {
  title: string;
  description: string;
  image: string;
}

export const SingleCarouselCard = ({ data }: { data: propsInterface }) => {
  return (
    <div className="w-full max-w-[650px] min-h-[320px] bg-[url('/assets/AdBg.png')] bg-cover bg-main_blue rounded-md relative">
      <div className="flex flex-col justify-start pt-5 gap-4 max-w-[350px] ml-4 h-full z-20">
        <h2 className="w-full font-semibold text-3xl text-white">
          {data.title}
        </h2>
        <p className="w-full text-white">{data.description}</p>
      </div>
      <Image
        src={data.image}
        alt={data.title}
        width={500}
        height={500}
        className="max-w-[350px] w-full h-[200px] object-contain absolute right-2 bottom-2 z-0"
      />
    </div>
  );
};
