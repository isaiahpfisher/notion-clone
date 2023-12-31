import Image from "next/image";

const Heroes = () => {
  return (
    <div className="flex max-w-5xl flex-col items-center justify-center">
      <div className="flex items-center">
        <div className="relative size-[300px] sm:size-[350px] md:size-[400px]">
          <Image
            fill
            src={"/documents.png"}
            alt="documents"
            className="object-contain dark:hidden"
          />
          <Image
            fill
            src={"/documents-dark.png"}
            alt="documents"
            className="hidden object-contain dark:block"
          />
        </div>
        <div className="relative hidden size-[400px] md:block">
          <Image
            fill
            src={"/reading.png"}
            className="object-contain dark:hidden"
            alt="reading"
          />
          <Image
            fill
            src={"/reading-dark.png"}
            className="hidden object-contain dark:block"
            alt="reading"
          />
        </div>
      </div>
    </div>
  );
};

export default Heroes;
